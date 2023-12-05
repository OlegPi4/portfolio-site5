"use strict"
/*Модальное окно Materialize*/
window.onload = function() {
   let modal = document.querySelectorAll('.modal');
   let instancesModal = M.Modal.init(modal);
 };

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
   burgerMenu.addEventListener("click", function() {
      toggleVert();
   })
}
/*закрытие вертикального меню по х */
const vertClose = document.querySelector('.nav-link-close')
if(vertClose) {
   vertClose.addEventListener("click", function() {
      toggleVert();
   })
}
/*закрытие вертикального меню по клику вне меню */
document.addEventListener('click', (e) => {
   // проверка является ли елемент дочерним по отношению к указаному
   const withinVM = e.composedPath().includes(vertMenu);
   const withinBM = e.composedPath().includes(burgerMenu);
   // если кли не на элемент вертикального меню или бургер и верт. меню имеет класс _active 
 	if ( ! withinVM && 
      (document.querySelector('.vert-menu._active') !== null)&&
      ! withinBM ) {
      toggleVert();
   }
})


function toggleVert() {
   document.body.classList.toggle('_lock');
   burgerMenu.classList.toggle('_active');
   vertMenu.classList.toggle('_active');
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
