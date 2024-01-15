'use strict';

console.log("Peticiones AJAX");

var usuario= [];
var divFoto=document.querySelector('#foto');
var divUsuario=document.querySelector('#usuario');

var datos=$("#usuario");
//$(datos).load("https://randomuser.me/api");

$(document).ready(function(){
    console.log("Ficheros cargados correctamente");
    // --- Método GET ---
    var datos=$("#usuario");
    $.get("https://randomuser.me/api",{page:1},function(response){

        console.log("response: ",response);
        usuario=response['results'];
        console.log("usuario: ",usuario);
        usuario=usuario[0];
        console.log("usuario 0: ",usuario);
        let foto=document.createElement('img');
        foto.setAttribute("src", usuario['picture']['medium']);
        divFoto.appendChild(foto);
//        divUsuario.append("<p>"+usuario['name']['first']+" "+usuario['name']['last']+"</p>");
        let datos1=document.createElement('p');
        let datos2=document.createElement('p');
        let datos3=document.createElement('p');
        let datos4=document.createElement('p');
        datos1.innerHTML=usuario['name']['first']+" "+usuario['name']['last'];
//      "<p>"+usuario['name']['first']+" "+usuario['name']['last']+"</p><br>";
        datos2.innerHTML="Email: "+usuario['email'];
//      "<p>Email: "+usuario['email']+"</p><br>";
        datos3.innerHTML=usuario['location']['street']['name']+", "+usuario['location']['street']['number'];
//      "<p>"+usuario['location']['street']['name']+", "+usuario['location']['street']['number']+"</p><br>";
        datos4.innerHTML=usuario['location']['city']+" ("+usuario['location']['state']+")";
//      "<p>"+usuario['location']['city']+" ("+usuario['location']['state']+")"+"</p><br>";
        divUsuario.appendChild(datos1).appendChild(datos2).appendChild(datos3).appendChild(datos4);
        });
    });
/*
        nombre.innerHTML=usuario['name']['first']+" "+usuario['name']['last'];
        email.innerHTML="Email: "+usuario['email'];
        direccion.innerHTML=usuario['location']['street']['name']+", "+usuario['location']['street']['number'];
        ciudad.innerHTML=usuario['location']['city']+" ("+usuario['location']['state']+")";

        let foto=document.createElement('img');
        foto.setAttribute("src", usuario['picture']['medium']);
        divFoto.appendChild(foto);
*/