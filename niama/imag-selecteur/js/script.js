'use strict';

var index;
var photos;
var total;

function onClickListItem(){
    var selectedPhotos; 

    this.classList.toggle('selected');

    selectedPhotos = document.querySelectorAll('.photo-list li.selected'); // recherche de toutes les balises <li> sélectionnées

    total.textContent = selectedPhotos.length;

}

photos = document.querySelectorAll('.photo-list li');
total = document.querySelector('#total em');

for(index=0; index<photos.length; index++){
    photos[index].addEventListener('click', onClickListItem);
}