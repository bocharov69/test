(function () {
  $('.m-call__form__options__item').on('click', (e) => {
    const thisContainer = $(e.target).closest('section');

    $(thisContainer).find('.m-call__form__options__item').each((i, el) => $(el).removeClass('m-call__form__options__item--active'));

    $(e.currentTarget).addClass('m-call__form__options__item--active');

    const index = $(thisContainer).find('.m-call__form__options__item').index(e.target);
    $(thisContainer).find('.m-call__form__radio').eq(index).prop('checked', true);
  })


  const callRequestTriggers = $('.m-call-request');

  callRequestTriggers.on('click', (e) => {
    const contactWay = $(e.currentTarget).data('contact-way');

    $('.m-call .m-call__form__options__item').eq(contactWay - 1).click();
  });

})()