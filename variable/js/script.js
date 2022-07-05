"use strict"; // n'accepte aucune erreur du code
let prenom; //meilleur maniere de déclarer une variable
console.log(prenom);
prenom = "Tom"; // on a affecté une valeur à la variable prenom grace au signe égal
console.log(prenom); // nous permet de verifier en console nos infos
console.log(typeof prenom); // permet de controler le type de variable, dans ce cas nous avons une variable de type string


let age = "28";
console.log(age);
console.log(typeof age); // malgrer la presence de chiffre j'ai une variable de type String

age = 28; // là nous passons en type number
console.log(typeof age);

let nombreDecimal = 6.1; // encore une variable de type number
console.log(typeof nombreDecimal);

let valide = true; // là nous avons une variable de type Boolean
console.log(typeof valide);


// Concatenation***************************************************************************************
// il s'agit d'additionner plusieurs variables entres elles


alert("Bonjour " + prenom + ", tu dechire en  JS !!")  // ancienne methode 

alert(`Bonjour ${prenom}, tu dechire en js, tu as ${age} ans => tu est jeune`) // version es6


// calcul *************************************************************************************************

let nb1 = 1
let nb2 = 2
console.log(nb1 + nb2); // première manière de calculer

let nb3 = 3;
let nb4 = 4;
let resultat = nb3 + nb4;
console.log(resultat); // autre manière de calculer



// MODULO ****************************************************************************************************

let nb5 = 10%3;
console.log(nb5);
/*je vais chercher le modulo (reste de la division) de 10/3 */
// le resultat sera 1, donc modulo 1;




// DEUX fonctions importantes

let chaine1 = "37";
let chaine2 = "102.58";
console.log("concatenation =>" + (chaine1 + chaine2));  // une concatenation 

console.log(parseInt(chaine1)+parseFloat(chaine2));
// parseInt() on transforme la chaine de caractere en chiffre ENTIER
// parseFloat() on transforme la chaine de caractere en nombre DECIMAL


// Constante ******************************************************************************

const nom = "Issa";

// nom = "RV";  <= ceci est une erreur ( on ne peut pas modifier une constante)

console.log(nom);


// la portée des variables **********************************************************

let variableLet = "global";
var variableVar = "global";

console.log(variableLet); // global
console.log(variableVar); // global

if(true){

    let variableLet = "local";
    var variableVar = "local";

    console.log(variableLet);//local
    console.log(variableVar);//local
}

console.log(variableLet);//global
console.log(variableVar);//local



