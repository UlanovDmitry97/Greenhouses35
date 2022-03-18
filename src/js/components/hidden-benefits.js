const btnVisable = document.querySelector('.advantages-product__more');
const hiddenInfo = document.querySelector('.product-more-info');
const btnVisableProduct = document.querySelector('.greenhouse-product__more');
const hiddenInfoProduct = document.querySelector('.greenhouse-product__more-info');
const btnVisableArticles = document.querySelector('.article__more');
const hiddenInfoArticles = document.querySelector('.article__more-info');
const btnVisableReviews = document.querySelector('.reviews-section__feedback');
const hiddenInfoReviews = document.querySelector('.form-review');

if (btnVisable) {
  btnVisable.addEventListener('mouseover', () => {
    hiddenInfo.classList.add('product-more-info_visable');
    btnVisable.classList.add('advantages-product__more_hidden');
  });

  btnVisable.addEventListener('click', () => {
    hiddenInfo.classList.add('product-more-info_visable');
    btnVisable.classList.add('advantages-product__more_hidden');
  });
}

if (btnVisableReviews) {
  btnVisableReviews.addEventListener('click', () => {
    hiddenInfoReviews.classList.toggle('form-review_visable');
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

if (btnVisableArticles) {
  btnVisableArticles.addEventListener('mouseover', () => {
    hiddenInfoArticles.classList.add('article__more-info_visable');
    btnVisableArticles.classList.add('article__more_hidden');
  });

  btnVisableArticles.addEventListener('click', () => {
    hiddenInfoArticles.classList.add('article__more-info_visable');
    btnVisableArticles.classList.add('article__more_hidden');
  });
}
