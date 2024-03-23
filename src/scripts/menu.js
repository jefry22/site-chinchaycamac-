import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const button = document.querySelector('#btnMenu');
  const menuOpen = document.querySelector('#mobileMenu');
  button.addEventListener("click",(e)=>{
    e.preventDefault();
    menuOpen.classList.toggle('hidden');
  });

document.addEventListener("DOMContentLoaded", function() {
 
  // Ocultar preloader y mostrar contenido después de que la página se haya cargado completamente
  setTimeout(function(){
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 2000); 
  // Cambia el valor de 2000 a la cantidad de milisegundos que desees para el preloader
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  direction: 'horizontal',
  loop: true,
  breakpoints: {  
    '1024': {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    '480': {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});



