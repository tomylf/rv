"use strict"

let tableauA = ["Google ", "Qwant ", "Ecosia"];

let tableauB = ["https://www.google.fr/", "https://www.qwant.com/?l=fr", "https://www.ecosia.org/"];

let a = document.querySelectorAll('a')
//  je cherche à afficher dans mon HTML les noms des moteurs de recherches contenu dans mon tableau en JS, pour cela j'ai un ensemble de valeur (tableau), je vais donc chercher a separer chaque valeur afin de pouvoir manipuler une a une.
// Pour cela je sais qu'une boucle me permettra de passer d'un index à l'autre sur mon tableau
// mon tableau est classé par ordre index0 et augmente 1 par 1 à chaque nouvelle valeur

for(let i=0; i<tableauB.length; i++){
    // 1er etape recuperer mon tableau
    console.log(tableauA);
    // 2eme etape recuper les elements de  mon tableau 1 par 1
    console.log(tableauA[i]);
    // même chose pour les balises a 
    console.log(a[i]);
    a[i].textContent=tableauA[i];
    a[i].href=tableauB[i]
}
