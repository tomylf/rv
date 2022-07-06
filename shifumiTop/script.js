'use strict';

// --------ANIMATION---------
let largeur=50

function ouverture(){
    largeur -=1;

    let div1=document.getElementById("leftWall");

    div1.setAttribute('style','width:'+largeur+'%');
    console.log(largeur);
    if(largeur ==0) clearInterval(timer);

    largeur -=1;

    let div2=document.getElementById("rightWall");

    div2.setAttribute('style','width:'+largeur+'%');
    console.log(largeur);
    if(largeur ==0) clearInterval(timer);
}

let timer=setInterval('ouverture()',50);

let compteurCpu=0;
let compteurUser=0;

let scoreCpu=document.querySelector('#cpuScore');
console.log(scoreCpu);
scoreCpu.innerHTML=0;
console.log(scoreCpu);

let scoreUser=document.getElementById('userScore');
// console.log(scoreUser);
scoreUser.innerHTML=0;

let pierre=document.getElementById('pierre').getAttribute('src');
let feuille=document.getElementById('feuille').getAttribute('src');
let ciseaux=document.getElementById('ciseaux').getAttribute('src');
let result=document.getElementById('cpu').getAttribute('src');

let pierreClick=document.getElementById('pierre');
let feuilleClick=document.getElementById('feuille');
let ciseauxClick=document.getElementById('ciseaux');

let h2=document.getElementById("h2").innerHTML;


let userName=prompt("Entrez votre pseudo :");

document.getElementById("user").innerHTML="Score "+userName;

console.log(h2);

console.log(pierreClick);

console.log(pierre);
console.log(feuille);
console.log(ciseaux);

let cpu="Robot";
let cpuChoice;

pierreClick.addEventListener('click',testPierre);
feuilleClick.addEventListener('click',testFeuille);
ciseauxClick.addEventListener('click',testCiseaux);

function testPierre(){
    
    cpuChoice = (Math.floor(Math.random() * 3 + 1));
    switch(cpu){
        case 1:
            cpuChoice = "pierre";
        break;
    
        case 2:
            cpuChoice = "feuille";
        break;
    
        case 3:
            cpuChoice = "ciseaux";
        break;
    }
    console.log(cpuChoice);
    if(cpuChoice == 1){
        document.getElementById('cpu').src=("img/pierre.png");
        document.getElementById("h2").innerHTML="Egalité !";
        document.getElementById("h2").style.backgroundColor='grey';
    }
    else{

        switch(pierreClick){
            case pierreClick:
                if(cpuChoice == 2){
                    document.getElementById('cpu').src=("img/feuille.png");
                    document.getElementById("h2").innerHTML="Feuille ! "+userName+" a perdu !";
                    document.getElementById("h2").style.backgroundColor='red';
                    compteurCpu++;
                    scoreCpu.innerHTML=compteurCpu;
                }

                else{
                    document.getElementById('cpu').src=("img/ciseaux.png")
                    document.getElementById("h2").innerHTML="Ciseaux ! "+userName+" a gagné !";
                    document.getElementById("h2").style.backgroundColor='green';
                    compteurUser++;
                    scoreUser.innerHTML=compteurUser;
                }
            break;
        }
    }
}
function testFeuille(){
    
    cpuChoice = (Math.floor(Math.random() * 3 + 1));

    switch(cpu){

        case 1:
            cpuChoice = "pierre";
        break;
    
        case 2:
            cpuChoice = "feuille";
        break;
    
        case 3:
            cpuChoice = "ciseaux";
        break;
    }
    console.log(cpuChoice);
    if(cpuChoice == 2){
        document.getElementById('cpu').src=("img/feuille.png");
        document.getElementById("h2").innerHTML="Egalité !";
        document.getElementById("h2").style.backgroundColor='grey';
    }
    else{
        switch(feuilleClick){
            case feuilleClick:
                if(cpuChoice == 3){
                    document.getElementById('cpu').src=("img/ciseaux.png");
                    document.getElementById("h2").innerHTML="Ciseaux ! "+userName+" a perdu !";//rien ne se passe
                    document.getElementById("h2").style.backgroundColor='red';
                    compteurCpu++;
                    scoreCpu.innerHTML=compteurCpu;
                }
                else{
                    document.getElementById('cpu').src=("img/pierre.png")
                    document.getElementById("h2").innerHTML="Pierre ! "+userName+" a gagné !";
                    document.getElementById("h2").style.backgroundColor='green';
                    compteurUser++;
                    scoreUser.innerHTML=compteurUser;
                }
            break;
        }
    }
}


function testCiseaux(){
    
    cpuChoice = (Math.floor(Math.random() * 3 + 1));

    switch(cpu){

        case 1:
            cpuChoice = "pierre";
        break;
    
        case 2:
            cpuChoice = "feuille";
        break;
    
        case 3:
            cpuChoice = "ciseaux";
        break;
    }

    console.log(cpuChoice);

    if(cpuChoice == 3){
        document.getElementById('cpu').src=("img/ciseaux.png");
        document.getElementById("h2").innerHTML="Egalité !";
        document.getElementById("h2").style.backgroundColor='grey';
    }

    else{

        switch(ciseauxClick){
            case ciseauxClick:
                if(cpuChoice == 1){
                    document.getElementById('cpu').src=("img/pierre.png");
                    document.getElementById("h2").innerHTML="Pierre ! "+userName+" a perdu !";
                    document.getElementById("h2").style.backgroundColor='red';
                    compteurCpu++;
                    scoreCpu.innerHTML=compteurCpu;

                }

                else{
                    document.getElementById('cpu').src=("img/feuille.png")
                    document.getElementById("h2").innerHTML="Feuille ! "+userName+" a gagné !";
                    document.getElementById("h2").style.backgroundColor='green';
                    compteurUser++;
                    scoreUser.innerHTML=compteurUser;

                }
            break;
        }
    }
}