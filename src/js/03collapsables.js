
// FUNCIONES COLLAPSABLES
//SE PUEDE HACER CON ARRAYS Y BUCLES. ESPERAR
function handleDesign(event) {
  fill.classList.add('collapsable');
  share.classList.add('collapsable');
  design.classList.remove('collapsable');
  up1.classList.remove('collapsable');
  down1.classList.add('collapsable');
  up3.classList.add('collapsable');
  down3.classList.remove('collapsable');
  up2.classList.add('collapsable');
  down2.classList.remove('collapsable');

}

function handleFill(event) {
  design.classList.add('collapsable');
  share.classList.add('collapsable');
  fill.classList.remove('collapsable');
  up2.classList.remove('collapsable');
  down2.classList.add('collapsable');
  up1.classList.add('collapsable');
  down1.classList.remove('collapsable');
  up3.classList.add('collapsable');
  down3.classList.remove('collapsable');

}

function handleShare(event) {
  design.classList.add('collapsable');
  fill.classList.add('collapsable');
  share.classList.remove('collapsable');
  up3.classList.remove('collapsable');
  down3.classList.add('collapsable');
  up2.classList.add('collapsable');
  down2.classList.remove('collapsable');
  up1.classList.add('collapsable');
  down1.classList.remove('collapsable');

}

// EVENTOS COLLAPSABLES

designLegend.addEventListener('click', handleDesign)
fillLegend.addEventListener('click', handleFill)
shareLegend.addEventListener('click', handleShare)

