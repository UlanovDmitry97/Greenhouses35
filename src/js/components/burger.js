const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burgerMenu');
const burgerMobile = document.getElementById('burgerMobile');
const burgerMenuMobile = document.getElementById('burgerMenuMobile')

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu__wrapp_visable');
});

burgerMobile.addEventListener('click', () => {
  burgerMenuMobile.classList.toggle('menu__wrapp_visable');
});

document.addEventListener('click', event => {
  let dontClose = false;
  event.path.forEach(element => {
    if (element === burger || element === burgerMenu || element === burgerMobile || element === burgerMenuMobile) {
      dontClose = true;
    }
  });
  if (dontClose) return;
  burgerMenu.classList.remove('menu__wrapp_visable');
  burgerMenuMobile.classList.remove('menu__list_visable')
});
