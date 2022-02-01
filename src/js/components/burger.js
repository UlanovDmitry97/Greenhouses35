const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burgerMenu');
const burgerMobile = document.getElementById('burgerMobile');
const burgerMenuMobile = document.getElementById('burgerMenuMobile')

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu__list_visable');
});

burgerMobile.addEventListener('click', () => {
  burgerMenuMobile.classList.toggle('menu__list_visable');
});

document.addEventListener('click', event => {
  let dontClose = false;
  event.path.forEach(element => {
    if (element === burger || element === burgerMenu) {
      dontClose = true;
    }
  });
  if (dontClose) return;
  burgerMenu.classList.remove('menu__list_visable');
});
