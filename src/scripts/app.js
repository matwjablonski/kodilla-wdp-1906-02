const cartCounter = document.querySelector('.cart-counter');
let cartCounterContain = cartCounter.textContent;

if (cartCounterContain < 0 || cartCounterContain > 999) {
  cartCounter.textContent = 'Err';
}
