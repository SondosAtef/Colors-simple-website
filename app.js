const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


//display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu );

// Show active item when scrolling
const highLightMenu = () =>{
    const elemn = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY

    //add "highlight" class to my menu items
    if(window.innerWidth > 960 && scrollPos < 450 ){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1250) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutMenu.classList.remove('highlight')
        servicesMenu.classList.add('highlight')
        return
    }

   if((elemn && window.innerWidth < 960 && scrollPos < 600 || elemn)){
       elemn.classList.remove('highlight')
   } 
}

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);

//close mobile menu

const hideMobileMenu = () =>{
    const menuBar = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBar){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}
menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);
 