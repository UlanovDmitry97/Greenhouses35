const footerMenuBtns = document.querySelectorAll('.footer-menu-mobile__btn');

footerMenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const dropdown = document.getElementById(target);
    dropdown.classList.toggle('footer-dropdown-top__list_show');
  });
})

