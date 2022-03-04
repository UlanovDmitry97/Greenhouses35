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

const footerMenuBtns = document.querySelectorAll('.footer-menu-mobile__btn');

footerMenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const dropdown = document.getElementById(target);
    dropdown.classList.toggle('footer-dropdown-top__list_show');
  });
})


const btnVisable = document.querySelector('.advantages-greenhouses__more');
const hiddenInfo = document.querySelector('.greenhouse-more-info');

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsImZvb3Rlci1kcm9wZG93bi5qcyIsImhpZGRlbi1iZW5lZml0cy5qcyIsIm1hcC5qcyIsIm1vZGFsLmpzIiwicHJvZHVjdC1zd2lwZXIuanMiLCJyZXZpZXdzLXN3aXBlci5qcyIsInN0b2NrLXN3aXBlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJyk7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlck1lbnUnKTtcbmNvbnN0IGJ1cmdlck1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXJNb2JpbGUnKTtcbmNvbnN0IGJ1cmdlck1lbnVNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyTWVudU1vYmlsZScpXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X193cmFwcF92aXNhYmxlJyk7XG59KTtcblxuYnVyZ2VyTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJNZW51TW9iaWxlLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3dyYXBwX3Zpc2FibGUnKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgbGV0IGRvbnRDbG9zZSA9IGZhbHNlO1xuICBldmVudC5wYXRoLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IGJ1cmdlciB8fCBlbGVtZW50ID09PSBidXJnZXJNZW51IHx8IGVsZW1lbnQgPT09IGJ1cmdlck1vYmlsZSB8fCBlbGVtZW50ID09PSBidXJnZXJNZW51TW9iaWxlKSB7XG4gICAgICBkb250Q2xvc2UgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIGlmIChkb250Q2xvc2UpIHJldHVybjtcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X193cmFwcF92aXNhYmxlJyk7XG4gIGJ1cmdlck1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9fbGlzdF92aXNhYmxlJylcbn0pO1xuIiwiY29uc3QgZm9vdGVyTWVudUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyLW1lbnUtbW9iaWxlX19idG4nKTtcblxuZm9vdGVyTWVudUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gYnRuLmRhdGFzZXQudGFyZ2V0O1xuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcbiAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdmb290ZXItZHJvcGRvd24tdG9wX19saXN0X3Nob3cnKTtcbiAgfSk7XG59KVxuXG4iLCJjb25zdCBidG5WaXNhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkdmFudGFnZXMtZ3JlZW5ob3VzZXNfX21vcmUnKTtcbmNvbnN0IGhpZGRlbkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZW5ob3VzZS1tb3JlLWluZm8nKTtcblxuaWYgKGJ0blZpc2FibGUpIHtcbiAgYnRuVmlzYWJsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgaGlkZGVuSW5mby5jbGFzc0xpc3QuYWRkKCdncmVlbmhvdXNlLW1vcmUtaW5mb192aXNhYmxlJyk7XG4gICAgYnRuVmlzYWJsZS5jbGFzc0xpc3QuYWRkKCdhZHZhbnRhZ2VzLWdyZWVuaG91c2VzX19tb3JlX2hpZGRlbicpO1xuICB9KTtcblxuICBidG5WaXNhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGhpZGRlbkluZm8uY2xhc3NMaXN0LmFkZCgnZ3JlZW5ob3VzZS1tb3JlLWluZm9fdmlzYWJsZScpO1xuICAgIGJ0blZpc2FibGUuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlcy1ncmVlbmhvdXNlc19fbW9yZV9oaWRkZW4nKTtcbiAgfSk7XG59XG4iLCJ5bWFwcy5yZWFkeShpbml0KTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vINCh0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLRiy5cbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XG4gICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0YbQtdC90YLRgNCwINC60LDRgNGC0YsuXG4gICAgLy8g0J/QvtGA0Y/QtNC+0Log0L/QviDRg9C80L7Qu9GH0LDQvdC40Y46IMKr0YjQuNGA0L7RgtCwLCDQtNC+0LvQs9C+0YLQsMK7LlxuICAgIC8vINCn0YLQvtCx0Ysg0L3QtSDQvtC/0YDQtdC00LXQu9GP0YLRjCDQutC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiyDQstGA0YPRh9C90YPRjixcbiAgICAvLyDQstC+0YHQv9C+0LvRjNC30YPQudGC0LXRgdGMINC40L3RgdGC0YDRg9C80LXQvdGC0L7QvCDQntC/0YDQtdC00LXQu9C10L3QuNC1INC60L7QvtGA0LTQuNC90LDRgi5cbiAgICBjZW50ZXI6IFs1OS4xNDY2MzMsIDM3LjkyMzY0Nl0sXG4gICAgLy8g0KPRgNC+0LLQtdC90Ywg0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNGPLiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPOlxuICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxuICAgIHpvb206IDE2XG4gIH0pO1xuXG4gIC8vINCX0LDQs9C+0YLQvtCy0LrQsCDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtC5INC80LXRgtC60Lgg0L3QsCDQutCw0YDRgtC1XG4gIHZhciBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU5LjE0NjYzMywgMzcuOTIzNjQ2XSwge30sIHtcbiAgfSk7XG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbn1cbiIsImNvbnN0IHByb2plY3RzSW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0c19faW1nJyk7XG5jb25zdCBwcm9qZWN0c01vZGFsV3JhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX21vZGFsLXdyYXBwJyk7XG5jb25zdCBwcm9qZWN0c01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19tb2RhbCcpO1xuY29uc3QgcXVhbGl0eUFzc3VyYW5jZUltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVhbGl0eS1hc3N1cmFuY2VfX2ltZycpO1xuY29uc3QgcXVhbGl0eUFzc3VyYW5jZU1vZGFsV3JhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1hc3N1cmFuY2VfX21vZGFsLXdyYXBwJyk7XG5jb25zdCBxdWFsaXR5QXNzdXJhbmNlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1hc3N1cmFuY2VfX21vZGFsJyk7XG5cbmlmIChwcm9qZWN0c01vZGFsV3JhcHApIHtcbiAgcHJvamVjdHNJbWdzLmZvckVhY2goaW1nID0+IHtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBpbWcuc3JjO1xuICAgICAgY29uc3QgaW1nQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWdDcmVhdGUuc3JjID0gc3JjO1xuICAgICAgaW1nQ3JlYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19tb2RhbC1pbWcnKTtcblxuICAgICAgd2hpbGUgKHByb2plY3RzTW9kYWwuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0c01vZGFsLnJlbW92ZUNoaWxkKHByb2plY3RzTW9kYWwuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHByb2plY3RzTW9kYWwuYXBwZW5kKGltZ0NyZWF0ZSk7XG4gICAgICBwcm9qZWN0c01vZGFsV3JhcHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX21vZGFsLXdyYXBwX3Zpc2FwYmxlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1oaWRkZW4nKTtcbiAgICB9KVxuICB9KTtcblxuICBwcm9qZWN0c01vZGFsV3JhcHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCcucHJvamVjdHNfX21vZGFsJykpIHtcbiAgICAgIHByb2plY3RzTW9kYWxXcmFwcC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0c19fbW9kYWwtd3JhcHBfdmlzYXBibGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmIChxdWFsaXR5QXNzdXJhbmNlTW9kYWxXcmFwcCkge1xuICBxdWFsaXR5QXNzdXJhbmNlSW1ncy5mb3JFYWNoKGltZyA9PiB7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3JjID0gaW1nLnNyYztcbiAgICAgIGNvbnN0IGltZ0NyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nQ3JlYXRlLnNyYyA9IHNyYztcbiAgICAgIGltZ0NyZWF0ZS5jbGFzc0xpc3QuYWRkKCdxdWFsaXR5LWFzc3VyYW5jZV9fbW9kYWwtaW1nJyk7XG5cbiAgICAgIHdoaWxlIChxdWFsaXR5QXNzdXJhbmNlTW9kYWwuZmlyc3RDaGlsZCkge1xuICAgICAgICBxdWFsaXR5QXNzdXJhbmNlTW9kYWwucmVtb3ZlQ2hpbGQocXVhbGl0eUFzc3VyYW5jZU1vZGFsLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBxdWFsaXR5QXNzdXJhbmNlTW9kYWwuYXBwZW5kKGltZ0NyZWF0ZSk7XG4gICAgICBxdWFsaXR5QXNzdXJhbmNlTW9kYWxXcmFwcC5jbGFzc0xpc3QuYWRkKCdxdWFsaXR5LWFzc3VyYW5jZV9fbW9kYWwtd3JhcHBfdmlzYXBibGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWhpZGRlbicpO1xuICAgIH0pXG4gIH0pO1xuXG4gIHByb2plY3RzTW9kYWxXcmFwcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0c19fbW9kYWwnKSkge1xuICAgICAgcHJvamVjdHNNb2RhbFdyYXBwLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2plY3RzX19tb2RhbC13cmFwcF92aXNhcGJsZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcblxuICBxdWFsaXR5QXNzdXJhbmNlTW9kYWxXcmFwcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5xdWFsaXR5LWFzc3VyYW5jZV9fbW9kYWwnKSkge1xuICAgICAgcXVhbGl0eUFzc3VyYW5jZU1vZGFsV3JhcHAuY2xhc3NMaXN0LnJlbW92ZSgncXVhbGl0eS1hc3N1cmFuY2VfX21vZGFsLXdyYXBwX3Zpc2FwYmxlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1oaWRkZW4nKTtcbiAgICB9XG4gIH0pO1xufVxuXG4iLCJjb25zdCBncmVlbWhvdXNlUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVlbmhvdXNlLXByb2R1Y3RfX2luZm8tc2xpZGVyJyk7XG5cbmlmIChncmVlbWhvdXNlUHJvZHVjdCkge1xuICBjb25zdCBzd2lwZXJHcmVlbmhvdXNlUHJvZHVjdCA9IG5ldyBTd2lwZXIoJy5ncmVlbmhvdXNlLXByb2R1Y3RfX2luZm8tc2xpZGVyJywge1xuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuZ3JlZW5ob3VzZS1wcm9kdWN0X19pbmZvLXBhZ2luYXRpb24nLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG5cbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDYwMDAsXG4gICAgfSxcbiAgfSk7XG59O1xuXG4iLCJjb25zdCBzd2lwZXJSZXZpZXdzID0gbmV3IFN3aXBlcignLnN3aXBlci1yZXZpZXdzJywge1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gIHNwYWNlQmV0d2VlbjogNTAsXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItcmV2aWV3cy1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1yZXZpZXdzLWJ1dHRvbi1wcmV2JyxcbiAgfSxcblxuICBicmVha3BvaW50czoge1xuICAgIDU3Njoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIH0sXG5cbiAgICA5Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXG4gICAgfVxuICB9XG59KTtcbiIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItc3RvY2snLCB7XG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBsb29wOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcblxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiA2MDAwLFxuICB9LFxufSk7XG4iLCIiXX0=
