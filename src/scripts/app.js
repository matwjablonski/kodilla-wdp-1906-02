const cartCounter = document.querySelector('.cart-counter');
let cartCounterContain = cartCounter.textContent;

if (cartCounterContain < 0 || cartCounterContain > 999) {
  cartCounter.textContent = 'Err';
}

var button = document.querySelector('#nav-toggle');

button.addEventListener('click', function (event) {
  document.getElementById('nav-menu').classList.toggle('active');
});

