'use strict';



/* https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data =>{
        usuarios=data;
        console.log(usuarios);
    });



// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    .then(function(data){
        //convertir datos a json
        return data.json();
    })
    .then(users=>{
        //guardar los datos de usuario en una variable
        usuarios=users; // saca más info
        console.log(usuarios);
        usuarios=users.data; //saca sólo los datos
        console.log(usuarios);

        //mostrar usuarios por pantalla
        usuarios.map(function(user,i){

            let nombre=document.createElement('h3');
            nombre.innerHTML=i+" - "+user.first_name+" "+user.last_name;      
            divUsuarios.appendChild(nombre);
            //quitamos el cargo
            document.querySelector('.cargando').style.display='none';
        })
    })

        */
//--2. ENCADENAR PROMESAS 
console.log("Peticiones AJAX");

var usuarios= [];
var divUsuarios=document.querySelector('#usuarios');

realizarPeticionTodosUsuarios()
    .then(data=>data.json())
    .then(users=>{
        pintarUsuarios(users.data);
    })
function realizarPeticionTodosUsuarios(){
    // realiza la petición
    return fetch('https://reqres.in/api/users');
}

function pintarUsuarios(usuarios){
    //mostrar usuarios por pantalla con función map
    usuarios.map(function(user,i){
        let nombre=document.createElement('h3');
            nombre.innerHTML=i+" - "+user.first_name+" "+user.last_name;      
            divUsuarios.appendChild(nombre);
            //quitamos el cargo
            document.querySelector('.cargando').style.display='none';
    });
}