const btnVisable = document.querySelector('.advantages-greenhouses__more');
const hiddenInfo = document.querySelector('.greenhouse-more-info');
const btnVisableProduct = document.querySelector('.greenhouse-product__more');
const hiddenInfoProduct = document.querySelector('.greenhouse-product__more-info');

if (btnVisable) {
  btnVisable.addEventListener('mouseover', () => {
    hiddenInfo.classList.add('greenhouse-more-info_visable');
    btnVisable.classList.add('advantages-greenhouses__more_hidden');
  });

  btnVisable.addEventListener('click', () => {
    hiddenInfo.classList.add('greenhouse-more-info_visable');
    btnVisable.classList.add('advantages-greenhouses__more_hidden');
  });
}

if (btnVisableProduct) {
  btnVisableProduct.addEventListener('mouseover', () => {
    hiddenInfoProduct.classList.add('greenhouse-product__more-info_visable');
    btnVisableProduct.classList.add('greenhouse-product__more_hidden');
  });

  btnVisableProduct.addEventListener('click', () => {
    hiddenInfoProduct.classList.add('greenhouse-product__more-info_visable');
    btnVisableProduct.classList.add('greenhouse-product__more_hidden');
  });
}
