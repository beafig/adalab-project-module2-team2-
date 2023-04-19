/* eslint-disable strict */

function handleReset(event) {
  localStorage.removeItem('formData');
  event.preventDefault();
  card = {
    palette: '1',
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  };
  createCard.classList.add('collapsable');
  twitterBtn.classList.add('collapsable');
  linkCard.classList.add('collapsable');
  errorMsg.classList.add('collapsable');
  resetInputs();
  resetImage();
  resetPalette();
  updatePreview();
}

function resetImage() {
  profileImage.style.backgroundImage = `url("./assets/images/profile-pic.jpg")`;
  profilePreview.style.backgroundImage = '';
}

function resetInputs() {
  for (let i = 0; i < inputFill.length; i++) {
    inputFill[i].value = '';
  }
}

function resetPalette() {
  radio1.checked = true;
  handleRadio1();
}

resetBtn.addEventListener('click', handleReset);