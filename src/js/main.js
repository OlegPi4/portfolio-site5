"use strict"

/*------Прокрутка при клике по горизонтальному меню------*/
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if ( menuLinks.length > 0 ) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick)
   });
}
function onMenuLinkClick(e) {
   const menuLink = e.target;
   if ( menuLink.dataset.goto && document.querySelector(menuLink.dataset.    goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__nav').offsetHeight; 
      window.scrollTo({
         top: gotoBlockValue,
         behavior: "smooth"
      });
      e.preventDefault();
   }

}
/*---------Меню-бургер----------*/

const burgerMenu = document.querySelector('.burger')
const vertMenu = document.querySelector('.vert-menu')
if(burgerMenu) {
   //const vertMenu = document.querySelector('.vert-menu')
   burgerMenu.addEventListener("click", function() {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active'); 
      vertMenu.classList.toggle('_active');
   })
}
/*закрытие вертикального меню*/
const vertClose = document.querySelector('.nav-link-close')
if(vertClose) {
   //const vertMenu = document.querySelector('.vert-menu')
   vertClose.addEventListener("click", function() {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active');
      vertMenu.classList.toggle('_active');
   })
}

/*------Прокрутка при клике по вертикальному меню------*/
const navLinks = document.querySelectorAll('.nav-link');
if ( navLinks.length > 0 ) {
   navLinks.forEach(navLink => {
      navLink.addEventListener('click', function(e) {
         document.body.classList.remove('_lock');
         burgerMenu.classList.remove('_active');
         vertMenu.classList.remove('_active');
         onMenuLinkClick(e);   

      })
   });
}
/*Модальное окно Materialize*/
document.addEventListener('DOMContentLoaded', function() {
   let modal = document.querySelectorAll('.modal');
   let instancesModal = M.Modal.init(modal);
 });