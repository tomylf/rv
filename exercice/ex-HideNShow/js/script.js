"use strict"

// let p1 = document.querySelector('.p1');

// let h1 = document.querySelector('h1');

// p1.hidden = true; // cache le paragraphe

// function ouvre(){
//     if(p1.hidden == false ){ //si le paragraphe n'est pas caché
//         p1.hidden = true; // il se cacher
//     }else{
//         p1.hidden = false; // sinon il n'est pas cacher
//     }
// }

// h1.addEventListener("click", ouvre); // evenement sur le h1, click + appel de la fonction



// *********************************************************************************************



let h1 = document.querySelector('h1');

h1.addEventListener('click', function hideAndShow(){

    let p = document.querySelectorAll("p"); // Nodeliste de l'ensemble des "p"; une nodeliste est une sorte de tableau donc il classera les elements de l'index 0, au plus grand
    for(let i=0; i<p.length; i++){
        let pIndex = p[i]; // à chaque tour de boucle je viens stocker un paragraphe dans la variables pIndex
        console.log(pIndex);
        let pIndexClass = pIndex.getAttribute('class');
        console.log(pIndexClass);
        if (pIndexClass == "p1"){
            pIndex.setAttribute("class", 'show');
        }else if(pIndexClass == "show"){
            pIndex.setAttribute("class", 'p1');
        }
    }
})

