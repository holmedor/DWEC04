'use strict';

console.log("Peticiones AJAX: TIPOS");

var datos, total;
var desde = 0;
const intervalo = 10;
var url="https://api.euskadi.eus/directory/types?lang=SPANISH";

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
            $('#tipos').append("<p>"+element.id+" "+element.name+"</p>");
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