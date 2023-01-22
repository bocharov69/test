

function isEventInElement(event, element) {
  var rect = element.getBoundingClientRect();
  var x = event.clientX;
  if (x < rect.left || x >= rect.right) return false;
  var y = event.clientY;
  if (y < rect.top || y >= rect.bottom) return false;
  return true;
}

const widgets = [document.querySelector('.widgets .contact__main .widgets__button')].concat(document.querySelector('.widgets .calculate .widgets__button'));


document.addEventListener('mousemove', (evt) => {
  const needOpen = widgets.some(vidget => isEventInElement(evt, vidget));

  if (needOpen) {
    document.querySelector('.widgets').classList.add('widgets--hover');
  }

})

$('.widgets').on('mouseleave', function (e) {
  $(this).removeClass('widgets--hover')
})


$('.widgets .contact__main .widgets__button').hover(() => {
  $('.widgets .contact').addClass('contact--visible');
})


$('.widgets .calculate .widgets__button').hover(() => {
  $('.widgets .calculate').addClass('calculate--visible');
})

$('.widgets').on('mouseleave', () => {
  $('.widgets .contact').removeClass('contact--visible');
})

$('.widgets .calculate').on('mouseleave', () => {
  $('.widgets .calculate').removeClass('calculate--visible');
})




