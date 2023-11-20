/*-----------Функции-------------*/
/*---------События------------*/
const burger = document.querySelector('.burger')
const vertMenu = document.querySelector('.vert-menu')
burger.addEventListener('click', () => {
   // burger.style.display = "none"
   // vertMenu.style.display = "block"
   // console.log('dddddd');
   burger.style.cssText += `
      display: none;
   `
   vertMenu.style.cssText += `
      display: block;
   `
}, false)


 