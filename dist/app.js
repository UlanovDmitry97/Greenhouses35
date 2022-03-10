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

const footerMenuBtns = document.querySelectorAll('.footer-menu-mobile__btn');

footerMenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const dropdown = document.getElementById(target);
    dropdown.classList.toggle('footer-dropdown-top__list_show');
  });
})


const btnVisable = document.querySelector('.advantages-product__more');
const hiddenInfo = document.querySelector('.product-more-info');
const btnVisableProduct = document.querySelector('.greenhouse-product__more');
const hiddenInfoProduct = document.querySelector('.greenhouse-product__more-info');

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

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.146633, 37.923646],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });

  // Заготовка для кастомной метки на карте
  var myPlacemark = new ymaps.Placemark([59.146633, 37.923646], {}, {
  });
  myMap.geoObjects.add(myPlacemark);
}

const projectsImgs = document.querySelectorAll('.projects__img');
const projectsModalWrapp = document.querySelector('.projects__modal-wrapp');
const projectsModal = document.querySelector('.projects__modal');
const qualityAssuranceImgs = document.querySelectorAll('.quality-assurance__img');
const qualityAssuranceModalWrapp = document.querySelector('.quality-assurance__modal-wrapp');
const qualityAssuranceModal = document.querySelector('.quality-assurance__modal');

if (projectsModalWrapp) {
  projectsImgs.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.src;
      const imgCreate = document.createElement('img');
      imgCreate.src = src;
      imgCreate.classList.add('projects__modal-img');

      while (projectsModal.firstChild) {
        projectsModal.removeChild(projectsModal.firstChild);
      }

      projectsModal.append(imgCreate);
      projectsModalWrapp.classList.add('projects__modal-wrapp_visapble');
      document.body.classList.add('scroll-hidden');
    })
  });

  projectsModalWrapp.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.projects__modal')) {
      projectsModalWrapp.classList.remove('projects__modal-wrapp_visapble');
      document.body.classList.remove('scroll-hidden');
    }
  });
}

if (qualityAssuranceModalWrapp) {
  qualityAssuranceImgs.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.src;
      const imgCreate = document.createElement('img');
      imgCreate.src = src;
      imgCreate.classList.add('quality-assurance__modal-img');

      while (qualityAssuranceModal.firstChild) {
        qualityAssuranceModal.removeChild(qualityAssuranceModal.firstChild);
      }

      qualityAssuranceModal.append(imgCreate);
      qualityAssuranceModalWrapp.classList.add('quality-assurance__modal-wrapp_visapble');
      document.body.classList.add('scroll-hidden');
    })
  });

  projectsModalWrapp.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.projects__modal')) {
      projectsModalWrapp.classList.remove('projects__modal-wrapp_visapble');
      document.body.classList.remove('scroll-hidden');
    }
  });

  qualityAssuranceModalWrapp.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.quality-assurance__modal')) {
      qualityAssuranceModalWrapp.classList.remove('quality-assurance__modal-wrapp_visapble');
      document.body.classList.remove('scroll-hidden');
    }
  });
}


const greemhouseProduct = document.querySelector('.greenhouse-product__info-slider');

if (greemhouseProduct) {
  const swiperGreenhouseProduct = new Swiper('.greenhouse-product__info-slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.greenhouse-product__info-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 6000,
    },
  });
};


const swiperReviews = new Swiper('.swiper-reviews', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,

  navigation: {
    nextEl: '.swiper-reviews-button-next',
    prevEl: '.swiper-reviews-button-prev',
  },

  breakpoints: {
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    968: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 60,
    }
  }
});

const swiper = new Swiper('.swiper-stock', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 6000,
  },
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsImNvbnN0cnVjdG9yLWJ0bi5qcyIsImZvb3Rlci1kcm9wZG93bi5qcyIsImhpZGRlbi1iZW5lZml0cy5qcyIsIm1hcC5qcyIsIm1vZGFsLmpzIiwicHJvZHVjdC1zd2lwZXIuanMiLCJyZXZpZXdzLXN3aXBlci5qcyIsInN0b2NrLXN3aXBlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJyk7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlck1lbnUnKTtcbmNvbnN0IGJ1cmdlck1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXJNb2JpbGUnKTtcbmNvbnN0IGJ1cmdlck1lbnVNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyTWVudU1vYmlsZScpXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X193cmFwcF92aXNhYmxlJyk7XG59KTtcblxuYnVyZ2VyTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJNZW51TW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3dyYXBwX3Zpc2FibGUnKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgbGV0IGRvbnRDbG9zZSA9IGZhbHNlO1xuICBldmVudC5wYXRoLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGJ1cmdlciB8fCBlbGVtZW50ID09PSBidXJnZXJNZW51IHx8IGVsZW1lbnQgPT09IGJ1cmdlck1vYmlsZSB8fCBlbGVtZW50ID09PSBidXJnZXJNZW51TW9iaWxlKSB7XG4gICAgICBkb250Q2xvc2UgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIGlmIChkb250Q2xvc2UpIHJldHVybjtcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X193cmFwcF92aXNhYmxlJyk7XG4gIGJ1cmdlck1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9fbGlzdF92aXNhYmxlJylcbn0pO1xuIiwiY29uc3QgYnRuc0xvbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JlZW5ob3VzZS1wcm9kdWN0X19jb25zdHJ1Y3Rvci1idG4tbG9uZycpO1xuY29uc3QgYnRuc1N0ZXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JlZW5ob3VzZS1wcm9kdWN0X19jb25zdHJ1Y3Rvci1idG4tc3RlcCcpO1xuXG5pZiAoYnRuc0xvbmcpIHtcbiAgYnRuc0xvbmcuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGJ0bnNMb25nLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuaG91c2UtcHJvZHVjdF9fY29uc3RydWN0b3ItYnRuLWxvbmdfYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdncmVlbmhvdXNlLXByb2R1Y3RfX2NvbnN0cnVjdG9yLWJ0bi1sb25nX2FjdGl2ZScpO1xuICAgIH0pXG4gIH0pXG59XG5cbmlmIChidG5zU3RlcCkge1xuICBidG5zU3RlcC5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgYnRuc1N0ZXAuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW5ob3VzZS1wcm9kdWN0X19jb25zdHJ1Y3Rvci1idG4tc3RlcF9hY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2dyZWVuaG91c2UtcHJvZHVjdF9fY29uc3RydWN0b3ItYnRuLXN0ZXBfYWN0aXZlJyk7XG4gICAgfSlcbiAgfSlcbn1cbiIsImNvbnN0IGZvb3Rlck1lbnVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3Rlci1tZW51LW1vYmlsZV9fYnRuJyk7XG5cbmZvb3Rlck1lbnVCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGJ0bi5kYXRhc2V0LnRhcmdldDtcbiAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZm9vdGVyLWRyb3Bkb3duLXRvcF9fbGlzdF9zaG93Jyk7XG4gIH0pO1xufSlcblxuIiwiY29uc3QgYnRuVmlzYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHZhbnRhZ2VzLXByb2R1Y3RfX21vcmUnKTtcbmNvbnN0IGhpZGRlbkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1tb3JlLWluZm8nKTtcbmNvbnN0IGJ0blZpc2FibGVQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWVuaG91c2UtcHJvZHVjdF9fbW9yZScpO1xuY29uc3QgaGlkZGVuSW5mb1Byb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZW5ob3VzZS1wcm9kdWN0X19tb3JlLWluZm8nKTtcblxuaWYgKGJ0blZpc2FibGUpIHtcbiAgYnRuVmlzYWJsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgaGlkZGVuSW5mby5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LW1vcmUtaW5mb192aXNhYmxlJyk7XG4gICAgYnRuVmlzYWJsZS5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzLXByb2R1Y3RfX21vcmVfaGlkZGVuJyk7XG4gIH0pO1xuXG4gIGJ0blZpc2FibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGlkZGVuSW5mby5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0LW1vcmUtaW5mb192aXNhYmxlJyk7XG4gICAgYnRuVmlzYWJsZS5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzLXByb2R1Y3RfX21vcmVfaGlkZGVuJyk7XG4gIH0pO1xufVxuXG5pZiAoYnRuVmlzYWJsZVByb2R1Y3QpIHtcbiAgYnRuVmlzYWJsZVByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgIGhpZGRlbkluZm9Qcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2dyZWVuaG91c2UtcHJvZHVjdF9fbW9yZS1pbmZvX3Zpc2FibGUnKTtcbiAgICBidG5WaXNhYmxlUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdncmVlbmhvdXNlLXByb2R1Y3RfX21vcmVfaGlkZGVuJyk7XG4gIH0pO1xuXG4gIGJ0blZpc2FibGVQcm9kdWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhpZGRlbkluZm9Qcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2dyZWVuaG91c2UtcHJvZHVjdF9fbW9yZS1pbmZvX3Zpc2FibGUnKTtcbiAgICBidG5WaXNhYmxlUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdncmVlbmhvdXNlLXByb2R1Y3RfX21vcmVfaGlkZGVuJyk7XG4gIH0pO1xufVxuIiwieW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICAvLyDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0YsuXG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQutCw0YDRgtGLLlxuICAgIC8vINCf0L7RgNGP0LTQvtC6INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOOiDCq9GI0LjRgNC+0YLQsCwg0LTQvtC70LPQvtGC0LDCuy5cbiAgICAvLyDQp9GC0L7QsdGLINC90LUg0L7Qv9GA0LXQtNC10LvRj9GC0Ywg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YbQtdC90YLRgNCwINC60LDRgNGC0Ysg0LLRgNGD0YfQvdGD0Y4sXG4gICAgLy8g0LLQvtGB0L/QvtC70YzQt9GD0LnRgtC10YHRjCDQuNC90YHRgtGA0YPQvNC10L3RgtC+0Lwg0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQutC+0L7RgNC00LjQvdCw0YIuXG4gICAgY2VudGVyOiBbNTkuMTQ2NjMzLCAzNy45MjM2NDZdLFxuICAgIC8vINCj0YDQvtCy0LXQvdGMINC80LDRgdGI0YLQsNCx0LjRgNC+0LLQsNC90LjRjy4g0JTQvtC/0YPRgdGC0LjQvNGL0LUg0LfQvdCw0YfQtdC90LjRjzpcbiAgICAvLyDQvtGCIDAgKNCy0LXRgdGMINC80LjRgCkg0LTQviAxOS5cbiAgICB6b29tOiAxNlxuICB9KTtcblxuICAvLyDQl9Cw0LPQvtGC0L7QstC60LAg0LTQu9GPINC60LDRgdGC0L7QvNC90L7QuSDQvNC10YLQutC4INC90LAg0LrQsNGA0YLQtVxuICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1OS4xNDY2MzMsIDM3LjkyMzY0Nl0sIHt9LCB7XG4gIH0pO1xuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG59XG4iLCJjb25zdCBwcm9qZWN0c0ltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHNfX2ltZycpO1xuY29uc3QgcHJvamVjdHNNb2RhbFdyYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19tb2RhbC13cmFwcCcpO1xuY29uc3QgcHJvamVjdHNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbW9kYWwnKTtcbmNvbnN0IHF1YWxpdHlBc3N1cmFuY2VJbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1YWxpdHktYXNzdXJhbmNlX19pbWcnKTtcbmNvbnN0IHF1YWxpdHlBc3N1cmFuY2VNb2RhbFdyYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktYXNzdXJhbmNlX19tb2RhbC13cmFwcCcpO1xuY29uc3QgcXVhbGl0eUFzc3VyYW5jZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktYXNzdXJhbmNlX19tb2RhbCcpO1xuXG5pZiAocHJvamVjdHNNb2RhbFdyYXBwKSB7XG4gIHByb2plY3RzSW1ncy5mb3JFYWNoKGltZyA9PiB7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3JjID0gaW1nLnNyYztcbiAgICAgIGNvbnN0IGltZ0NyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nQ3JlYXRlLnNyYyA9IHNyYztcbiAgICAgIGltZ0NyZWF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19fbW9kYWwtaW1nJyk7XG5cbiAgICAgIHdoaWxlIChwcm9qZWN0c01vZGFsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdHNNb2RhbC5yZW1vdmVDaGlsZChwcm9qZWN0c01vZGFsLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBwcm9qZWN0c01vZGFsLmFwcGVuZChpbWdDcmVhdGUpO1xuICAgICAgcHJvamVjdHNNb2RhbFdyYXBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19tb2RhbC13cmFwcF92aXNhcGJsZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGlkZGVuJyk7XG4gICAgfSlcbiAgfSk7XG5cbiAgcHJvamVjdHNNb2RhbFdyYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnLnByb2plY3RzX19tb2RhbCcpKSB7XG4gICAgICBwcm9qZWN0c01vZGFsV3JhcHAuY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdHNfX21vZGFsLXdyYXBwX3Zpc2FwYmxlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1oaWRkZW4nKTtcbiAgICB9XG4gIH0pO1xufVxuXG5pZiAocXVhbGl0eUFzc3VyYW5jZU1vZGFsV3JhcHApIHtcbiAgcXVhbGl0eUFzc3VyYW5jZUltZ3MuZm9yRWFjaChpbWcgPT4ge1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHNyYyA9IGltZy5zcmM7XG4gICAgICBjb25zdCBpbWdDcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZ0NyZWF0ZS5zcmMgPSBzcmM7XG4gICAgICBpbWdDcmVhdGUuY2xhc3NMaXN0LmFkZCgncXVhbGl0eS1hc3N1cmFuY2VfX21vZGFsLWltZycpO1xuXG4gICAgICB3aGlsZSAocXVhbGl0eUFzc3VyYW5jZU1vZGFsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcXVhbGl0eUFzc3VyYW5jZU1vZGFsLnJlbW92ZUNoaWxkKHF1YWxpdHlBc3N1cmFuY2VNb2RhbC5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgcXVhbGl0eUFzc3VyYW5jZU1vZGFsLmFwcGVuZChpbWdDcmVhdGUpO1xuICAgICAgcXVhbGl0eUFzc3VyYW5jZU1vZGFsV3JhcHAuY2xhc3NMaXN0LmFkZCgncXVhbGl0eS1hc3N1cmFuY2VfX21vZGFsLXdyYXBwX3Zpc2FwYmxlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1oaWRkZW4nKTtcbiAgICB9KVxuICB9KTtcblxuICBwcm9qZWN0c01vZGFsV3JhcHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCcucHJvamVjdHNfX21vZGFsJykpIHtcbiAgICAgIHByb2plY3RzTW9kYWxXcmFwcC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0c19fbW9kYWwtd3JhcHBfdmlzYXBibGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xuICAgIH1cbiAgfSk7XG5cbiAgcXVhbGl0eUFzc3VyYW5jZU1vZGFsV3JhcHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCcucXVhbGl0eS1hc3N1cmFuY2VfX21vZGFsJykpIHtcbiAgICAgIHF1YWxpdHlBc3N1cmFuY2VNb2RhbFdyYXBwLmNsYXNzTGlzdC5yZW1vdmUoJ3F1YWxpdHktYXNzdXJhbmNlX19tb2RhbC13cmFwcF92aXNhcGJsZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuIiwiY29uc3QgZ3JlZW1ob3VzZVByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZW5ob3VzZS1wcm9kdWN0X19pbmZvLXNsaWRlcicpO1xuXG5pZiAoZ3JlZW1ob3VzZVByb2R1Y3QpIHtcbiAgY29uc3Qgc3dpcGVyR3JlZW5ob3VzZVByb2R1Y3QgPSBuZXcgU3dpcGVyKCcuZ3JlZW5ob3VzZS1wcm9kdWN0X19pbmZvLXNsaWRlcicsIHtcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBsb29wOiB0cnVlLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLmdyZWVuaG91c2UtcHJvZHVjdF9faW5mby1wYWdpbmF0aW9uJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiA2MDAwLFxuICAgIH0sXG4gIH0pO1xufTtcblxuIiwiY29uc3Qgc3dpcGVyUmV2aWV3cyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcmV2aWV3cycsIHtcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzcGFjZUJldHdlZW46IDUwLFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLXJldmlld3MtYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItcmV2aWV3cy1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1NzY6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICB9LFxuXG4gICAgOTY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgIH1cbiAgfVxufSk7XG4iLCJjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXN0b2NrJywge1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG5cbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogNjAwMCxcbiAgfSxcbn0pO1xuIiwiIl19
