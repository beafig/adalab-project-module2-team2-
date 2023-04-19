/* eslint-disable strict */
//FUNCIONES INPUT-PREVIEW

let card = {
  palette: '1',
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: ''
};

function handleInputs(event) {
  card[event.target.id] =
    event.target.value;
  localStorage.setItem('formData', JSON.stringify(card));
  opacityBtn();
  updatePreview();
}

function updatePreview() {
  // actualizar nombre
  if (card.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = card.name;
  }
  // actualizar trabajo
  if (card.job === '') {
    previewJob.innerHTML = 'Front-end Developer';
  } else {
    previewJob.innerHTML = card.job;
  }
  // actualizar email
  if (card.email !== '') {
    linkEmail.classList.remove('socials__disabled');
    linkEmail.href = `mailto:${card.email}`;
  } else if (card.email === '') {
    linkEmail.classList.add('socials__disabled');
  }
  // actualizar phone
  if (card.phone !== '') {
    linkNumber.classList.remove('socials__disabled');
    linkNumber.href = `tel:${card.phone}`;
  } else if (card.phone === '') {
    linkNumber.classList.add('socials__disabled');
  }
  // actualizar Linkedin
  if (card.linkedin !== '') {
    linkLinkedin.classList.remove('socials__disabled');
    linkLinkedin.href = `https://www.linkedin.com/in${card.linkedin}`;
  } else if (card.linkedin === '') {
    linkLinkedin.classList.add('socials__disabled');
  }
  // actualizar github
  if (card.github !== '') {
    linkGithub.classList.remove('socials__disabled');
    linkGithub.href = `https://github.com/${card.github}`;
  } else if (card.github === '') {
    linkGithub.classList.add('socials__disabled');
  }
}

for (const eachInput of inputs) {
  eachInput.addEventListener('input', handleInputs);
}