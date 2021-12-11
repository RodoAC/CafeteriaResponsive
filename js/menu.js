let BurgerButton = document.getElementById('burger-button');
let menu = document.getElementById('menu');
//BurgerButton.addEventListener('que evento, que deseo hacer')

BurgerButton.addEventListener('touchstart', function(){
  menu.classList.toggle('active');
});
