"use strict";

// Recuperer les balises par leurs noms
let header = document.getElementsByTagName("header");
console.log(header);

// On va pouvoir recuperer l'element par l'ID
let logo = document.getElementById("logo");
console.log(logo);

//  Recuperer les elements par la class
// let container = document.getElementsByClassName("container");
// console.log(container);



// ************************** Nouvel recuperation d'elements version ES6 ********************************

// recuperer 
let container = document.querySelector('.container'); // 
console.log(container);

let p = document.querySelector('p'); // il va recuperer le premier P contrairement au getElements qui les recupère tous
console.log(p);

document.body.append("Test !!!");
container.append('bonjour');

// creer un element

let helloWorld = document.createElement('div');
helloWorld.textContent = "HelloWorld2LeRetour";
helloWorld.style.background = "#ffbd69";
helloWorld.style.textAlign = 'center';
document.body.insertBefore(helloWorld,document.querySelector('.container'));

// suprimmer un element
// version courte
document.querySelector('h2').remove();
// version longue
// let h2 = document.querySelector('h2');
// h2.remove();


// **********************************************************

let bt = document.querySelector('button');
bt.onmouseover=()=>{
    document.body.style.background="purple";
}


function exit(){
    document.body.style.background = "aquamarine"
}

bt.addEventListener("mouseout", exit);