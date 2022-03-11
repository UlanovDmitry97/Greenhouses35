const btnsLong = document.querySelectorAll('.greenhouse-product__constructor-btn-long');
const btnsStep = document.querySelectorAll('.greenhouse-product__constructor-btn-step');
const colorBtns = document.querySelectorAll('.greenhouse-product__color');

if (btnsLong) {
  btnsLong.forEach(btn => {
    btn.addEventListener('click', function () {
      btnsLong.forEach(btn => {
        btn.classList.remove('greenhouse-product__constructor-btn-long_active');
      });

      this.classList.add('greenhouse-product__constructor-btn-long_active');
    })
  })
}

if (btnsStep) {
  btnsStep.forEach(btn => {
    btn.addEventListener('click', function () {
      btnsStep.forEach(btn => {
        btn.classList.remove('greenhouse-product__constructor-btn-step_active');
      });

      this.classList.add('greenhouse-product__constructor-btn-step_active');
    })
  })
}

if (colorBtns) {
  colorBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      colorBtns.forEach(btn => {
        btn.classList.remove('greenhouse-product__color_active');
      });

      this.classList.add('greenhouse-product__color_active');
    })
  })
}
