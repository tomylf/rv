"use strict";

let age0 = 20;
let age1 = 15;

//on appelle une structure conditionnel les instructions qui permettent de tester si une condition est vrai ou non

// if (expression){instruction}

if(age0 >= 18){ // ici je fais un test en ecrivant si(age est superieur ou egal à 18){alors tu affichera dans la console.log("Super tu es majeur") }
    console.log("Super tu es majeur");
}

if(age1 >= 18){ // si (age1 est superieur ou egal à 18){tu affiche console.log("super tu es grand")}
    console.log("Super tu es mineur");
}else{
    console.log("Super tu es grand");
}


// ****************************************************


let couleur = "#ff0000";

if(couleur == "#00ff00"){
    console.log("vert");
}else if (couleur == "#ff0000"){
    console.log("rouge");
}else{
    console.log("test à refaire");
}


// BOB qui a 18ans
//Melanie qui à 22 ans
// Sarah qui à 15 ans
// creer des variables afin de sauvegarder ces gens
// sauvegarde egalement leurs ages
// afficher le console avec la concatenation une phrase disant "Bienvenue à vous (nom de la personne) vous avez bien (tel age) donc vous pouvez rentrez dans le casino"
//Vous ne pouvez pas rentrer dans le casino


let prenom1 = "Bob";
let prenom2 = "Melanie";
let prenom3 = "Sarah";
let ageBob = 18;
let ageMelanie = 22;
let ageSarah = 15;

if(ageBob >= 18){
    console.log(`Bonjour et bienvenue Mr/Mme ${prenom1} dans notre casino`);
}else{
    console.log(`Bonjour Mr/Mme ${prenom1}, vous êtes trop jeune pour entrer dans notre casino`);
}

if(ageMelanie >= 18){
    console.log(`Bonjour et bienvenue Mr/Mme ${prenom2} dans notre casino`);
}else{
    console.log(`Bonjour Mr/Mme ${prenom2}, vous êtes trop jeune pour entrer dans notre casino`);
}

if(ageSarah >= 18){
    console.log(`Bonjour et bienvenue Mr/Mme ${prenom3} dans notre casino`);
}else{
    console.log(`Bonjour Mr/Mme ${prenom3}, vous êtes trop jeune pour entrer dans notre casino`);
}

let prenomUser = prompt("Quel est votre prenom ?");
let ageUser = parseInt(prompt("Quel est votre âge ?"));
if(ageUser >=18){
    console.log(`Bonjour et bienvenue Mr/Mme ${prenomUser} dans notre casino`);
}else{
    console.log(`Bonjour Mr/Mme ${prenomUser}, vous êtes trop jeune pour entrer dans notre casino`);
}


// Operateur Logique ****************************************************************

let majeur = true;
let tenueCorrect = true;
let tenueCorrectBis = false;

// AND && les deux condition doivent être vrais

console.log("majeur ET tenueCorrect ==>" +(majeur && tenueCorrect)); // true

console.log("majeur ET tenueCorrectBis ==>" +(majeur && tenueCorrectBis)); // false

// OR || une des deux conditions dois être vrai 

console.log("majeur OU tenueCorrect ==>" +(majeur || tenueCorrect)); // true

console.log("majeur OU tenueCorrectBis ==>" +(majeur || tenueCorrectBis)); // true

// demander l'année de naissance d'une personne
// on effectu le calcul de son âge (votre année - année de naissance)
// celon son âge un lui ferais un commentaires (tu es adolescent, adulte ou retraité)

// si tu as entre 10 et 20 ans tu es ados
// si tu as entre 20 et 60 ans tu es adulte
// si tu as entre 60 ou plus tu es retraité

// veuillez rentrer une date de naissance valide

let anneeBorn = parseInt(prompt("Quelle est votre année de naissance ?")); // la valeur de la variable est la reponse de l'utilisateur
let resultat = 2022 - anneeBorn;

    if(resultat >= 10 && resultat <20) // ne pas oublier de fermer le niveau d'age (ici ados) avec inferieur à 20 ans (resulat < 20)
    {
        console.log("tu es adolescent !");
    }
    else if(resultat >= 20 && resultat <60){
        console.log("tu es adulte !");
    }
    else{
        console.log(`tu es retaité`);
    }



    // SWITCH ************************************************************************************


    let panier = prompt("Choisissez parmis ces trois fruits ou légumes : courgette, carotte, tomate");
    switch(panier){
        case "courgette":
            console.log(`Vous aves choisi :${panier}`);
            break;
        case "carotte":
            console.log(`Vous aves choisi :${panier}`);
            break;
        case "tomate":
            console.log(`Vous aves choisi :${panier} le fruit`);
            break;
        default:
            console.log(`refaite votre choix`);
            panier = prompt("Choisissez parmis ces trois fruits ou légumes : courgette, carotte, tomate");
    }
    // comme le if mais pour un nombre determiné de de choix (en general pas plus de 5 )



    // Operateur ternaire **********************************

    let message = (age >= 18)?"Vous etes majeur":"Vous etes mineur";
    // let message = (test)  ?       "true"     :       "false";
                                            // ou \\

