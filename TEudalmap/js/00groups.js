'use strict';

console.log("Peticiones AJAX: grupos");

var datos, total;
var desde = 0;
const intervalo = 10;
//var url="https://api.euskadi.eus/directory/types?lang=SPANISH";
var url="https://api.euskadi.eus/udalmap/groups?lang=SPANISH&summarized=false"

function pedirDatos(){
    return new Promise(function (resolve,reject){
        $.ajax({ //JQUERY
            url:url,
            success: function(data){
                console.log('Pedir datos')

                //resuelve la promesa y va al then() de la función
                resolve(data)
            },
            error: function(error){

                //rechaza la promesa y va al catch() de la función
                reject(error)
            }
        })
    })
}
/* */
function pintar(){
    console.log("datos: ",datos);
        datos.forEach(element=>{
            $('#grupos').append("<p> "+element.id+" "+element.name+"</p>");
            element.subgroups.forEach(subelement=>{
                $('#grupos').append("<p>  "+subelement.id+" "+subelement.name+"</p>");
                subelement.indicators.forEach(indicador=>{
                    $('#grupos').append("<p>   "+indicador.id+" "+indicador.name+"</p>");
                })
            })
        });
}
//////////MAIN///////////////
pedirDatos()
  .then(function (data){ //JS
    //cuando resuelve la promesa ejecuta este codigo
    datos=data
    console.log(datos)
    pintar()
    })
  .catch(function(err){ //JS
    //cuando la promesa es rechazada ejecuta este código
    console.log(err)
    })