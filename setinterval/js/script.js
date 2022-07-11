"use strict";

let div = document.querySelector('#div');
let hauteur = 0;

function miniAnimation(){
    hauteur+=5;
    div.setAttribute("style", "height:"+ hauteur +"px");
    if(hauteur == 850){
        clearInterval(timer);
    }
}
let timer = window.setInterval("miniAnimation()", 1)