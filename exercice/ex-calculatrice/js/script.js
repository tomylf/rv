"use strict";

function egal (){

    let nb1 = document.querySelector("#nbr1").value;
    console.log(nb1);

    let nb2 = document.querySelector("#nbr2").value;
    console.log(nb2);

    let resultat = document.querySelector("#result");
    console.log(resultat);

    let select = document.querySelector("#calcul").value;
    console.log(select);

    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);

    if(select == "+"){
        resultat.value = nb1 +nb2;
    }
    else if(select == "*"){
        resultat.value = nb1 * nb2;
    }
    else if(select == "-"){
        resultat.value = nb1 - nb2;
    }
    else if(select == "/"){
        if(nb2!=0){
            resultat.value = nb1 / nb2;
        }
        else{
            resultat.value = "impossible"
        }
    }
}
let btn = document.querySelector("#bt");
btn.addEventListener("click", egal);