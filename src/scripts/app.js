const cartCounter = document.querySelector('.cart-counter');
let cartCounterContain = cartCounter.textContent;

if (cartCounterContain < 0 || cartCounterContain > 999) {
  cartCounter.textContent = 'Err';
}

var button = document.querySelector('#nav-toggle');
var menu = document.querySelector('#nav-menu');

button.addEventListener('click', function (event) {
  if (menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = '';
  }
});
