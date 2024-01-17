'use strict';

console.log("Peticiones AJAX: GENERAL");

var direccion;
var datos, total;
var desde = 0;
const intervalo = 10;
var urlbase = "https://api.euskadi.eus/directory?lang=SPANISH&fromItemAt=";
var url = urlbase + desde + "&pageSize=" + intervalo;

function pedirDatos(miurl) {
    return new Promise(function (resolve, reject) {
        $.ajax({ //JQUERY
            url: miurl,
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

function pintar() {
    console.log("datos: ", datos);
    total = datos.totalItemsCount;
    console.log("total: ",total);
    $('#total').empty();
    $('#total').append(total);
    datos = datos.pageItems;
    console.log("datos.pageItems: ", datos);
    console.log("desde: ", desde)
    $('#desde').empty();
    $('#desde').append(desde)
    $('#hasta').empty();
    $('#hasta').append(desde + intervalo)
    datos.forEach(element => {
        console.log("element.geoPosition: ",element.geoPosition);
        if (element.geoPosition != null) {
            direccion = element.geoPosition.address;
        } else {
            direccion = "No hay datos"
        }
//        $('#general').append("<p> <a href=" + element._links.mainEntityOfPage + " target=”_blank”> " + element.name + "</a></p>");
        $('#general').append("<p> <a href=" + direccion + " target=”_blank”> " + element.name + "</a>" + direccion + "</p>");
    });
}

function siguiente() {
    desde = desde + intervalo;
    let sgteurl = urlbase + desde + "&pageSize=" + intervalo;
    pedirDatos(sgteurl)
        .then(function (data) { //JS
            //cuando resuelve la promesa ejecuta este codigo
            datos = data
            console.log(datos)
            $('#general').empty();
            pintar()
        })
        .catch(function (err) { //JS
            //cuando la promesa es rechazada ejecuta este código
            console.log(err)
        })
}
//////////MAIN///////////////
pedirDatos(url)
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