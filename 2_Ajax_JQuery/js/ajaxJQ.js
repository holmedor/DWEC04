'use-strict'

//---Peticiones AJAX en JQuery---

$(document).ready(function(){
    console.log("Ficheros cargados correctamente");

    //--- CARGAR AJAX---

    // Load -- https://reqres.in
    var datos=$("#datos");
    $(datos).load("https://reqres.in");


    // --- Método GET ---

    // --- Otra forma de hacer peticiones AJAX ---

});