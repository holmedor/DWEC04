'use strict';

console.log("Peticiones AJAX: GENERAL");

var divGeneral=document.querySelector('#general');
var general = [];
var datos
//var url="https://api.euskadi.eus/directory/types?lang=SPANISH";
var url="https://api.euskadi.eus/directory?lang=SPANISH&fromItemAt=0&pageSize=10";
//var usuarios= [];
//fetch('https://api.euskadi.eus/directory?lang=SPANISH&fromItemAt=0&pageSize=10')
//fetch('https://api.euskadi.eus/directory')
/*fetch('https://api.euskadi.eus/directory?lang=SPANISH&fromItemAt=0&pageSize=100')
    .then(data => data.json())
    .then(data =>{
        usuarios=data;
        console.log(usuarios);
    });
*/
    
    //fetch('https://api.euskadi.eus/directory?lang=SPANISH&fromItemAt=0&pageSize=10')
    //fetch('https://api.euskadi.eus/directory')
    //fetch('https://api.euskadi.eus/directory?lang=SPANISH&fromItemAt=0&pageSize=100')
    /*
    fetch('https://api.euskadi.eus/directory/types?lang=SPANISH')
        //    .then(data => data.json())
        //    .then(data =>{
        //        general=data;
        //        console.log(general);
        //    });
        .then(function (data) {
            return data.json();//convertir datos a json
        })
        .then(types => {
            //guardar los datos de usuario en una variable
            general=types; // saca más info
            console.log("general: ",general);
    //        general=types.data; //saca sólo los datos
    //        console.log("general.data: ",general);
    
            //mostrar general por pantalla
            general.map(function (tipo, i) {
            
                let nombre = document.createElement('h3');
                nombre.innerHTML =i+" - "+ tipo.id + " " + tipo.name;
                divGeneral.appendChild(nombre);
                //quitamos el cargo
                document.querySelector('.cargando').style.display = 'none';
            })
        });
    */
    
    /*
        var datos=$("#general");
        $.get("https://api.euskadi.eus/directory/types?lang=SPANISH",function(response){
    
            console.log(response);
    
            response.forEach(element=>{
                $(datos).append("<p>"+element.id+" "+element.name+"</p>");
            });
        });
    */
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
        datos=datos.pageItems;
        console.log("datos.pageItems: ",datos);
    //    document.getElementById('cabecera').innerHTML=datos[0].Country
    //    document.getElementById('general').innerHTML=datos[0].id+" "+datos[0].name;
    
            //mostrar general por pantalla
    /*        datos.map(function (tipo, i) {
                let nombre = document.createElement('h3');
                nombre.innerHTML =i+" "+tipo.id + " " + tipo.name;
                console.log(nombre);
                divGeneral.appendChild(nombre);
            });
    */
            datos.forEach(element=>{
                $('#general').append("<p>"+element.id+" "+element.name+"</p>");
            });
    //    });
    
    }
    
    //////////MAIN///////////////
    //Cargar Jquery
    //$(document).ready(){
    
    //})
    //opcion número 1
    //pedirDatosOpcionUno()
    //pintar()
    
    //opcion número 2
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