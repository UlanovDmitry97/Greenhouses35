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
