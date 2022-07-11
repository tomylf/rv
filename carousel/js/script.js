" use strict"

//  3 variable, 1 function, 1 switch

let img = document.querySelector('#car');

img.addEventListener('click', function change(){
    let imgSrc = img.getAttribute("src");
    console.log(imgSrc);
    switch (imgSrc) {
        case "img/jdilla.jpg": 
            document.querySelector('#car').src='img/sunsetrv.jpg';
            break;
        case "img/sunsetrv.jpg": 
            img.src='img/sunsetrv2.jpg';
            break;    
        case "img/sunsetrv2.jpg": 
            img.src='img/jdilla.jpg';
            break;
    }
}
)

