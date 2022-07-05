"use strict"



//  Fonction sans paramètre
function saluer(){  // <== nom de la fonction
    console.log("Salut !");  // <== instruction à executer
}
saluer()  // <== appel de la fonction (avec son nom)




// Fonction avec paramètre
function saluerQqun(nom){
    console.log(`Salut ${nom}`);
}
let prenom = prompt('prenom');
saluerQqun ("Bob");
saluerQqun (prenom);


// creer une fonction avec deux parametres : pseudo et mail. 
// afficher en console une cocatenation qui salut la personne et valide son adresse mail
// l'appel de la fonction sera dynamique

function salutmec(pseudo, mail){ // <== (pseudo, mail) sont des parametres
    console.log(`Salut ${pseudo} votre mail est ${mail}`); // phrase à la fin de la
}
let pseudoUser = prompt('quel est votre pseudo ?'); // <== variable defini par l'utilisateur 
let mailUser = prompt('Quel est votre mail ?') // <== variable defini par l'utilisateur 
salutmec (pseudoUser, mailUser); // <== argument composé des variables si dessus 

/**
 *  ${variable/parametre/argument}
 */
// argument va prendre la place du parametre

/**
 * function anonyme
 */
// let functionAnonyme = function(){
//     console.log("je suis la fonction anonyme");
// }

/** ES6 fonction fleché */
let functionFleche =()=>{
    console.log("je suis une fonction fléchée");
}
functionFleche();