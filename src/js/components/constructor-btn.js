const btnsLong = document.querySelectorAll('.greenhouse-product__constructor-btn-long');
const btnsStep = document.querySelectorAll('.greenhouse-product__constructor-btn-step');

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
