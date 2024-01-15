'use strict';

console.log("Peticiones AJAX");

var usuario= [];
var divFoto=document.querySelector('#foto');
var divUsuario=document.querySelector('#usuario');

/*
fetch('https://randomuser.me/api')
    .then(data => data.json())
    .then(data =>{
        usuario=data;
        console.log(usuario);
    });
*/

fetch('https://randomuser.me/api')
    .then(function(data){
        return data.json();  //convertir datos a json
    })
    .then(usuario=>{
        //guardar los datos de usuario en una variable
        usuario=usuario['results']; // saca más info
        console.log("usuario results: ",usuario);
        usuario=usuario[0];
        console.log("usuario results 0: ",usuario);
        console.log("foto:",usuario['picture']['thumbnail']);
        console.log("nombre: ",usuario['name']['first']);
        console.log("apellido: ",usuario['name']['last']);
        console.log("email: ",usuario['email']);
        console.log("calle: ",usuario['location']['street']['name']);
        console.log("nº.: ",usuario['location']['street']['number']);
        console.log("ciudad: ",usuario['location']['city']);
        console.log("estado: ",usuario['location']['state']);
        let nombre=document.createElement('p');
        let email=document.createElement('p');
        let direccion=document.createElement('p');
        let ciudad=document.createElement('p');
        let estado=document.createElement('p');
        let foto=document.createElement('img');
//        foto.setAttribute("src", usuario['picture']['thumbnail']);
        foto.setAttribute("src", usuario['picture']['medium']);
        //        nombre.innerHTML="Nombre y apellido: "+usuario['name']['first']+" "+usuario['name']['last'];
        nombre.innerHTML=usuario['name']['first']+" "+usuario['name']['last'];
        email.innerHTML="Email: "+usuario['email'];
//        direccion.innerHTML="Dirección: "+usuario['location']['street']['name']+", "+usuario['location']['street']['number'];
        direccion.innerHTML=usuario['location']['street']['name']+", "+usuario['location']['street']['number'];
//        ciudad.innerHTML="Ciudad: "+usuario['location']['city'];
//        estado.innerHTML="Estado: "+usuario['location']['state']+"<br>"+"<hr>";
        ciudad.innerHTML=usuario['location']['city']+" ("+usuario['location']['state']+")";
//        divUsuario.appendChild(nombre).appendChild(email).appendChild(direccion).appendChild(ciudad).appendChild(estado).appendChild(foto);    
//      divUsuario.appendChild(nombre).appendChild(email).appendChild(direccion).appendChild(ciudad).appendChild(foto);
        divFoto.appendChild(foto);
        divUsuario.appendChild(nombre).appendChild(email).appendChild(direccion).appendChild(ciudad);
    });