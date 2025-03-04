// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Власний код

function updateImage() {
   let img = document.getElementById('responsive-img');
   if (window.innerWidth < 767.98) {
      img.src = 'img/smallmain-img.svg';
   } else {
      img.src = 'img/main-img.svg';
   }
}

window.addEventListener('resize', updateImage);
window.addEventListener('load', updateImage);