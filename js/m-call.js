const forms = document.querySelectorAll('.m-call__form');

function onCallRequest(e) {
  e.preventDefault();

  const input = e.target.querySelector('.input-number');

  e.target.addEventListener('submit', (e) => {
    if (!input.isDirty) {
      e.target.querySelector('.ntf').style.display = 'block';
      return false;
      e.preventDefault();
    } else {
      document.body.classList.add('call-requested');
      return true;
    }
  })
}

forms.forEach(form => form.addEventListener('submit', onCallRequest));