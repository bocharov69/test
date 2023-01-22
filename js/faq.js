
$('.faq__list__item').on('click', function () {
  const thisListItem = $(this);

  if (thisListItem.hasClass('faq__list__item--active')) {
    thisListItem.removeClass('faq__list__item--active')
  } else {
    $('.faq__list__item').each((i, el) => $(el).removeClass('faq__list__item--active'));
    thisListItem.addClass('faq__list__item--active');

  }
})