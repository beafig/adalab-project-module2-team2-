/* eslint-disable strict */

function handleClickShare(event) {
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(card),
  })
    .then((response) => response.json())
    .then((card) => {
      console.log(card);

      if (!card.success) {
        errorMsg.classList.remove('collapsable');
        if (card.error.includes('Mandatory fields:')) {
          errorMsg.innerHTML = 'Todos los campos son obligatorios excepto el télefono. Por favor, revise y cubra los campos restantes.';
          hideMsg();
        } else if (card.error.includes('Database error: ER_DATA_TOO_LONG')) {
          errorMsg.innerHTML = 'La foto es desmasiado grande debe ser de 200x200 px y menor a 120 KB, intente reducirla o use otra foto.';
          hideMsg();
        } else if (card.error.includes('Database error: Database was shut down')) {
          errorMsg.innerHTML = 'Ha ocurrido un error con el servidor, inténtelo de nuevo más tarde.';
        } else {
          errorMsg.innerHTML = 'Lo sentimos, ha ocurrido un error, inténtelo de nuevo más tarde.';
          hideMsg();
        }
      } else {
        //para que se muestre la URL de la tarjeta creada y el botón de TW
        linkCard.href = card.cardURL;
        linkCard.innerHTML = card.cardURL;
        twitterBtn.href = `https://twitter.com/intent/tweet?url=${linkCard.href}&hashtags=card,awesoneCards`;
        showMsg();
      }
    });
}

// función para ocultar los campos si no se puede crear la tarjeta
function hideMsg() {
  createCard.classList.add('collapsable');
  twitterBtn.classList.add('collapsable');
  linkCard.classList.add('collapsable');
}

function showMsg() {
  errorMsg.classList.add('collapsable');
  createCard.classList.remove('collapsable');
  twitterBtn.classList.remove('collapsable');
  linkCard.classList.remove('collapsable');
}

function opacityBtn() {
  if (inputName.value !== '' && inputJob.value !== '' && inputEmail.value !== '' && inputLinkedin.value !== '' && inputGithub.value !== '') {
    createBtn.classList.remove('opacity');
  } else if (inputName.value === '' || inputJob.value === '' || inputEmail.value === '' || inputLinkedin.value === '' || inputGithub.value === '') {
    createBtn.classList.add('opacity');
  }
}

opacityBtn();


createBtn.addEventListener('click', handleClickShare);


