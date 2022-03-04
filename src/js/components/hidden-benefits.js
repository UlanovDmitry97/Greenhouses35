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
