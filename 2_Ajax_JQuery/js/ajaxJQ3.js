'use-strict'

//---Peticiones AJAX en JQuery---

$(document).ready(function(){
    console.log("Ficheros cargados correctamente");

    //--- CARGAR AJAX---

    // Load -- https://reqres.in
//    var datos=$("#datos");
//    $(datos).load("https://reqres.in");


    // --- Método GET ---
/*    var datos=$("#datos");
    $.get("https://reqres.in/api/users",{page:2},function(response){

        console.log(response);

        response.data.forEach(element=>{
            $(datos).append("<p>"+element.first_name+"</p>");
        });
    });
*/
    // --- Método POST ---
    var datos=$("#datos");
    var usuario={
        "nombre":"Iker",
        "apellido":"Arana"
    }
    $.post("https://reqres.in/api/users",usuario,function(response){
        console.log(response);
    })
    // --- Otra forma de hacer peticiones AJAX ---

});