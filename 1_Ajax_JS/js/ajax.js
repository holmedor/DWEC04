'use strict';

console.log("Peticiones AJAX");

var usuarios= [];

// https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data =>{
        usuarios=data;
        console.log(usuarios);
    });