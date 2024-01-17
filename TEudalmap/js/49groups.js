'use strict';

console.log("Peticiones AJAX: grupos");

var datos, total;
var desde = 0;
const intervalo = 10;
//var url="https://api.euskadi.eus/directory/types?lang=SPANISH";
//var url="https://api.euskadi.eus/udalmap/groups?lang=SPANISH&summarized=false"
var url = "https://api.euskadi.eus/udalmap/indicators/49/entities?lang=SPANISH"
function pedirDatos() {
    return new Promise(function (resolve, reject) {
        $.ajax({ //JQUERY
            url: url,
            success: function (data) {
                console.log('Pedir datos')

                //resuelve la promesa y va al then() de la función
                resolve(data)
            },
            error: function (error) {

                //rechaza la promesa y va al catch() de la función
                reject(error)
            }
        })
    })
}
/* */
function pintar() {
    console.log("datos: ", datos);
    datos = datos.entities;
    //    console.log("datos.entities: ",datos);
    datos.forEach(entity => {
        console.log("entity.name: ", entity.name);
        $('#grupos').append("<p> " + entity.name + "</p>");
        console.log("entity.years[0]: ", entity.years[0]);
        //            $('#grupos').append("<p>  "+entity.years[0]+"</p>");
        let valores = entity.years['0'];
        console.log("valores: ", valores);
        for (const property in valores) {
            console.log(`${property}: ${valores[property]}`);
            let celdas = Math.trunc(`${valores[property]}` / 10);
//            let numeros="<p>" + `${property}` + " : " + `${valores[property]}` + " => " + celdas + "</p>";
//            let numeros=`${property}` + " : " + `${valores[property]}` + " => " + celdas ;
            let numeros="<div>" + `${property}` + " : " + `${valores[property]}` + " => " + celdas + "</div>";
            console.log("numeros: ",numeros);
//            let linea1=fila(celdas);
            let linea1=columna(celdas);
            console.log("linea1: ",linea1);
//            let linea=numeros.concat(" ",linea1);
            let linea=linea1.concat(" ",numeros);
            console.log("linea: ",linea);
            $('#grupos').append(linea);
        };
    });
}
function fila(tamanyo) {
    var row = '<table><tr>';
//    var row = '<tr>';
        for (let i=0;i<tamanyo;i++){
            row += '<td></td>';
        }
        row += '</tr></table>';
//        row += '</tr>';
        console.log("row: ",row);
        return row;
//        $('#grupos').append(row);
}
function columna(tamanyo) {
    var col = '<table>';
        for (let i=0;i<tamanyo;i++){
            col += '<tr><td></td></tr>';
        }
        col += '</table>';
        console.log("col: ",col);
        return col;
}
//////////MAIN///////////////
pedirDatos()
    .then(function (data) { //JS
        //cuando resuelve la promesa ejecuta este codigo
        datos = data
        console.log(datos)
        pintar()
    })
    .catch(function (err) { //JS
        //cuando la promesa es rechazada ejecuta este código
        console.log(err)
    })