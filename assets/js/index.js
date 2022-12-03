const menu__button = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__lateral");
const menu__image = document.querySelector(".menu__button--image");

menu__button.addEventListener('click', ()=>{
    menu.classList.toggle('menu__lateral--active');
    if (menu__image.getAttribute('src') == './assets/img/icon-hamburger.svg'){
        menu__image.setAttribute('src','./assets/img/icon-close.svg');
    }
    else{
        menu__image.setAttribute('src', './assets/img/icon-hamburger.svg');
    }
})