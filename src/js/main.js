"use strict"
/* -------Определение устройства-------*/ 
const isMobile = {
   Android: function() {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function() {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
};
if (isMobile.any()) {
   document.body.classList.add('_touch')
} else {
   document.body.classList.add('_pc')
}
/*-----Адаптация ширины горизонтального меню*/
const widthWindow = document.documentElement.clientWidth
const headerMenu = document.querySelector('.header__nav')
window.addEventListener('DOMContentLoaded', adaptWidthMenu())

function adaptWidthMenu() {
   
   if (widthWindow < 1440 && widthWindow > 1110) {
      let padding = ((widthWindow-1110) / 2)+'px'
      headerMenu.style.cssText += `
      padding-left: ${padding};
      padding-right: ${padding};
      `
   }
}
/*------Прокрутка при клике------*/
const menuLinks = document.querySelectorAll('.menu__link[data-goTo]')
if(menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick)
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.     goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto)
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__nav').offsetHeight; 
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}
/*---------Меню-бургер----------*/

// const burgerMenu = document.querySelector('.burger')
// if(burgerMenu) {
//    const vertMenu = document.querySelector('.vert-menu')
//    burgerMenu.addEventListener("click", function(e) {
//       document.body.classList.toggle('_lock')
//       burgerMenu.classList.toggle('_active')
//       vertMenu.classList.toggle('_active')
//    })
   
// }
let burg = document.querySelector('.burger')
burg.onclick = function() {
   burg.classList.toggle('_active')
}
