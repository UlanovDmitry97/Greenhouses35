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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsImZvb3Rlci1kcm9wZG93bi5qcyIsIm1hcC5qcyIsIm1vZGFsLmpzIiwicmV2aWV3cy1zd2lwZXIuanMiLCJzdG9jay1zd2lwZXIuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyTWVudScpO1xuY29uc3QgYnVyZ2VyTW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlck1vYmlsZScpO1xuY29uc3QgYnVyZ2VyTWVudU1vYmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXJNZW51TW9iaWxlJylcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX3dyYXBwX3Zpc2FibGUnKTtcbn0pO1xuXG5idXJnZXJNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlck1lbnVNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9fd3JhcHBfdmlzYWJsZScpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICBsZXQgZG9udENsb3NlID0gZmFsc2U7XG4gIGV2ZW50LnBhdGguZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gYnVyZ2VyIHx8IGVsZW1lbnQgPT09IGJ1cmdlck1lbnUgfHwgZWxlbWVudCA9PT0gYnVyZ2VyTW9iaWxlIHx8IGVsZW1lbnQgPT09IGJ1cmdlck1lbnVNb2JpbGUpIHtcbiAgICAgIGRvbnRDbG9zZSA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgaWYgKGRvbnRDbG9zZSkgcmV0dXJuO1xuICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVfX3dyYXBwX3Zpc2FibGUnKTtcbiAgYnVyZ2VyTWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19saXN0X3Zpc2FibGUnKVxufSk7XG4iLCJjb25zdCBmb290ZXJNZW51QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290ZXItbWVudS1tb2JpbGVfX2J0bicpO1xuXG5mb290ZXJNZW51QnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBidG4uZGF0YXNldC50YXJnZXQ7XG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2Zvb3Rlci1kcm9wZG93bi10b3BfX2xpc3Rfc2hvdycpO1xuICB9KTtcbn0pXG5cbiIsInltYXBzLnJlYWR5KGluaXQpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8g0KHQvtC30LTQsNC90LjQtSDQutCw0YDRgtGLLlxuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcbiAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiy5cbiAgICAvLyDQn9C+0YDRj9C00L7QuiDQv9C+INGD0LzQvtC70YfQsNC90LjRjjogwqvRiNC40YDQvtGC0LAsINC00L7Qu9Cz0L7RgtCwwrsuXG4gICAgLy8g0KfRgtC+0LHRiyDQvdC1INC+0L/RgNC10LTQtdC70Y/RgtGMINC60L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQutCw0YDRgtGLINCy0YDRg9GH0L3Rg9GOLFxuICAgIC8vINCy0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8INCe0L/RgNC10LTQtdC70LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGCLlxuICAgIGNlbnRlcjogWzU5LjE0NjYzMywgMzcuOTIzNjQ2XSxcbiAgICAvLyDQo9GA0L7QstC10L3RjCDQvNCw0YHRiNGC0LDQsdC40YDQvtCy0LDQvdC40Y8uINCU0L7Qv9GD0YHRgtC40LzRi9C1INC30L3QsNGH0LXQvdC40Y86XG4gICAgLy8g0L7RgiAwICjQstC10YHRjCDQvNC40YApINC00L4gMTkuXG4gICAgem9vbTogMTZcbiAgfSk7XG5cbiAgLy8g0JfQsNCz0L7RgtC+0LLQutCwINC00LvRjyDQutCw0YHRgtC+0LzQvdC+0Lkg0LzQtdGC0LrQuCDQvdCwINC60LDRgNGC0LVcbiAgdmFyIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTkuMTQ2NjMzLCAzNy45MjM2NDZdLCB7fSwge1xuICB9KTtcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufVxuIiwiY29uc3QgcHJvamVjdHNJbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzX19pbWcnKTtcbmNvbnN0IHByb2plY3RzTW9kYWxXcmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbW9kYWwtd3JhcHAnKTtcbmNvbnN0IHByb2plY3RzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX21vZGFsJyk7XG5jb25zdCBxdWFsaXR5QXNzdXJhbmNlSW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWFsaXR5LWFzc3VyYW5jZV9faW1nJyk7XG5jb25zdCBxdWFsaXR5QXNzdXJhbmNlTW9kYWxXcmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LWFzc3VyYW5jZV9fbW9kYWwtd3JhcHAnKTtcbmNvbnN0IHF1YWxpdHlBc3N1cmFuY2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LWFzc3VyYW5jZV9fbW9kYWwnKTtcblxucHJvamVjdHNJbWdzLmZvckVhY2goaW1nID0+IHtcbiAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHNyYyA9IGltZy5zcmM7XG4gICAgY29uc3QgaW1nQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nQ3JlYXRlLnNyYyA9IHNyYztcbiAgICBpbWdDcmVhdGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX21vZGFsLWltZycpO1xuXG4gICAgd2hpbGUgKHByb2plY3RzTW9kYWwuZmlyc3RDaGlsZCkge1xuICAgICAgcHJvamVjdHNNb2RhbC5yZW1vdmVDaGlsZChwcm9qZWN0c01vZGFsLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHByb2plY3RzTW9kYWwuYXBwZW5kKGltZ0NyZWF0ZSk7XG4gICAgcHJvamVjdHNNb2RhbFdyYXBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19tb2RhbC13cmFwcF92aXNhcGJsZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWhpZGRlbicpO1xuICB9KVxufSk7XG5cbnByb2plY3RzTW9kYWxXcmFwcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnLnByb2plY3RzX19tb2RhbCcpKSB7XG4gICAgcHJvamVjdHNNb2RhbFdyYXBwLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2plY3RzX19tb2RhbC13cmFwcF92aXNhcGJsZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xuICB9XG59KTtcblxuaWYgKHF1YWxpdHlBc3N1cmFuY2VNb2RhbFdyYXBwKSB7XG4gIHF1YWxpdHlBc3N1cmFuY2VJbWdzLmZvckVhY2goaW1nID0+IHtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBpbWcuc3JjO1xuICAgICAgY29uc3QgaW1nQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWdDcmVhdGUuc3JjID0gc3JjO1xuICAgICAgaW1nQ3JlYXRlLmNsYXNzTGlzdC5hZGQoJ3F1YWxpdHktYXNzdXJhbmNlX19tb2RhbC1pbWcnKTtcblxuICAgICAgd2hpbGUgKHF1YWxpdHlBc3N1cmFuY2VNb2RhbC5maXJzdENoaWxkKSB7XG4gICAgICAgIHF1YWxpdHlBc3N1cmFuY2VNb2RhbC5yZW1vdmVDaGlsZChxdWFsaXR5QXNzdXJhbmNlTW9kYWwuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHF1YWxpdHlBc3N1cmFuY2VNb2RhbC5hcHBlbmQoaW1nQ3JlYXRlKTtcbiAgICAgIHF1YWxpdHlBc3N1cmFuY2VNb2RhbFdyYXBwLmNsYXNzTGlzdC5hZGQoJ3F1YWxpdHktYXNzdXJhbmNlX19tb2RhbC13cmFwcF92aXNhcGJsZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGlkZGVuJyk7XG4gICAgfSlcbiAgfSk7XG5cbiAgcHJvamVjdHNNb2RhbFdyYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnLnByb2plY3RzX19tb2RhbCcpKSB7XG4gICAgICBwcm9qZWN0c01vZGFsV3JhcHAuY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdHNfX21vZGFsLXdyYXBwX3Zpc2FwYmxlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1oaWRkZW4nKTtcbiAgICB9XG4gIH0pO1xuXG4gIHF1YWxpdHlBc3N1cmFuY2VNb2RhbFdyYXBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnLnF1YWxpdHktYXNzdXJhbmNlX19tb2RhbCcpKSB7XG4gICAgICBxdWFsaXR5QXNzdXJhbmNlTW9kYWxXcmFwcC5jbGFzc0xpc3QucmVtb3ZlKCdxdWFsaXR5LWFzc3VyYW5jZV9fbW9kYWwtd3JhcHBfdmlzYXBibGUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhpZGRlbicpO1xuICAgIH1cbiAgfSk7XG59XG5cbiIsImNvbnN0IHN3aXBlclJldmlld3MgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXJldmlld3MnLCB7XG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBsb29wOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzbGlkZXNQZXJHcm91cDogMSxcbiAgc3BhY2VCZXR3ZWVuOiA1MCxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1yZXZpZXdzLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLXJldmlld3MtYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNTc2OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgfSxcblxuICAgIDk2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICB9XG4gIH1cbn0pO1xuIiwiY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1zdG9jaycsIHtcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDYwMDAsXG4gIH0sXG59KTtcbiIsIiJdfQ==
