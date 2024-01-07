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
    
}
/* */
function pintar(){
    console.log(datos);
//    document.getElementById('cabecera').innerHTML=datos[0].Country
    document.getElementById('cabecera').innerHTML=datos[0].name
}

//////////MAIN///////////////
//Cargar Jquery
//$(document).ready(){

//})
//opcion número 1
pedirDatosOpcionUno()
pintar()

//opcion número 2
//pedirDatosOpcionDos()
//  .then(function (data){
    //cuando resuelve la promesa ejecuta este codigo
    //datos=data
    //console.log(datos)
//})
//  .catch(function(err)
    //caundo la promesa es rechazada ejecuta este código
    //console.log(err)
//})
