'use-strict'
////////////VARIABLES///////////////////
var datos
//var url='https://api.covid19api.com/countries'
var url='https://restcountries.com/v3.1/all'
////////////FUNCIONES///////////////////
/* */
function pedirDatosOpcionUno(){
    $.get(url,function(data,status){
        //miramos si nos devuelve success
        console.log('Pedir datos opcion 1');
        datos=data;
        console.log(datos);
    })
}
/* */
function pedirDatosOpcionDos(){
    return new Promise(function (resolve,reject){
        $.ajax({ //JQUERY
            url:url,
            success: function(data){
                console.log('Pedir datos opción 2')

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
    console.log(datos);
//    document.getElementById('cabecera').innerHTML=datos[0].Country
    document.getElementById('cabecera').innerHTML=datos[0].name.common
}

//////////MAIN///////////////
//Cargar Jquery
//$(document).ready(){

//})
//opcion número 1
//pedirDatosOpcionUno()
//pintar()

//opcion número 2
pedirDatosOpcionDos()
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
