"use strict";

// // syntaxe
// // for(initialisation; condition; incrementation){#instruction}
// for(let i=0;i<=10; i++){ // pour(let i=0; si i est egal ou plus petit que 10; alors je lui ajoute 1)
//     console.log("salut n°" +i);
// }

// i++ = i+1
// i+=5 = i+5

// let deno = prompt("choisissez un nombre")
// for(let i=0; i<=10; i++){
//     let resultat = deno * i;
//     console.log(`${deno} x ${i} = ${resultat}`);
// }


// for(let i=10; i>=0; i--){ 
    
//     if(i==0){ // si i est egal à zero
//         console.log("ça va peter !"); // il affiche le string
//     }else{   // sinon
//         console.log(i); // il affiche i
//     }
// }



// nous avons : 
// une machine a valider les colis
// pour etre accepter, le colis  de doit pas exeder

// 25cm longueur, 15cm largeur, 20cm hauteur

// ecrivez le programme de la machine 
// vous demander a l'utilisateur les dimensions du colis

// 1er etape : le programme dis juste si le colis est accepter ou non
// 2eme etape : le programme vous annonce plus particulierement quelle mesure ne convient pas (longueur refusé/hauteur refusé/largeur refusé)
// afficher le resultat dans console.log()

let larg = prompt("quelle est la largeur de votre colis");
let long = prompt("quelle est la longueur de votre colis");
let haut = prompt("quelle est la hauteur de votre colis");


function validColis(long,larg,haut){
    
    let largMax = 15;
    let longMax = 25;
    let hautMax = 20;
    if(larg>largMax){
        console.log("Colis refuser");
    }
    if(long>longMax){
        console.log("Colis refuser");
    }
    if(haut>hautMax){
        console.log("Colis refuser");
    }
    if(larg<=largMax && long<=longMax && haut<=hautMax){
        console.log("Colis accepter");
    }

}
validColis(long,larg,haut)




// if(larg <= largMax && long <= longMax && haut <= hautMax){
//     console.log("Votre colis est valide");
// }
// else if (larg>largMax && long<=longMax && haut<=hautMax ){
//     console.log("La largeur de votre colis est invalide");
// }
// else if (larg<=largMax && long>longMax && haut<=hautMax ){
//     console.log("La longueur de votre colis est invalide");
// }
// else if (larg>largMax && long<=longMax && haut>hautMax ){
//     console.log("La hauteur de votre colis est invalide");
// }

// else if (larg>largMax && long>longMax && haut<=hautMax ){
//     console.log("La largeur et la longueur de votre colis est invalide");
// }
// else if (larg<=largMax && long>longMax && haut>hautMax ){
//     console.log("La hauteur et la longueur de votre colis est invalide");
// }
// else if (larg>largMax && long<=longMax && haut>hautMax ){
//     console.log("La largeur et la hauteur de votre colis est invalide");
// }

// else{}







