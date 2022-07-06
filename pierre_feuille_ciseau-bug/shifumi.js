"use strict";

let choixUtilisateur=prompt("Quel valeur choisissez-vous  ? Pierre, feuille ou ciseaux");


choixUtilisateur = choixUtilisateur.toLowerCase()

let ordi;
let choixOrdi;

ordi = (Math.floor(Math.random() * 3) + 1);
//Math.floor(); renvoie le plus grand entier qui est inférieur ou égal à un nombre exemple math.floor de 5.99 sera egal a 5
//Math.random();renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu)


switch(ordi){
    case 1:
        choixOrdi= "pierre";
        break;
    case 2:
        choixOrdi= "feuille";
        break;
    case 3:
        choixOrdi = "ciseaux";
}


if(choixUtilisateur == choixOrdi){
    document.write("Vous êtes à égalité !")
}
else{
    
    switch(choixUtilisateur){
        case "pierre":
            if(choixOrdi == "ciseaux"){
                //Ajout de texte brute
                document.write("l'ordi a choisi ciseaux donc ordi a perdu")
            }
            else{
                document.write("l'ordi a choisi feuille donc ordi gagne")
            }
            
            break;
        case 'feuille':
            if(choixOrdi=='pierre'){
                document.write("l'ordi a choisi pierre donc ordi a perdu")
            }else{
                document.write("l'ordi a choisi ciseaux donc ordi gagne")
            }
            break;

            case 'ciseaux':
            if(choixOrdi=='feuille'){
                document.write("l'ordi a choisi feuille donc ordi a perdu")
            }else{
                document.write("l'ordi a choisi pierre donc ordi gagne")
            }break;
        }
    }