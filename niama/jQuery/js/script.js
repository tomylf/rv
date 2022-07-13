// la disponibilité du DOM

//  A partir du moment où mon DOM, c'est à dire l'ensemble de l'arboresence de ma page HTML est completement chargé; je peux commencer à utiliser jQuery.

// je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appellée AUTOMATIQUEMENT ! par jQuery lorsque le DOM sera entièrement défini.

// 3 façons de faire 

// ************************************************** 1er FACON ****************************************************************

jQuery(document).ready(function(){
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS...
})

// *********************************************** 2eme FACON ********************************************************************

$(document).ready(function(){
    //  -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS...
})

// *********************************************** 3eme FACON ********************************************************************

$(function(){
    //  -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS...
})

// *********************************************** 3eme FACON ********************************************************************

$(()=>{

        alert('Bienvenue dans ce cours jQuery !');

        // -- En js
        document.getElementById('TexteEnJquery').innerHTML = "Mon Texte en JS";

        // -- En JQ

        // -- En jQuery, les sélecteurs sont les mêmes qu'en CSS !!!
        $('#TexteEnJquery').html("Mon Texte en JQ");

    });