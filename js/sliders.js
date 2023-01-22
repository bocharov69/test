// Stages

if ($('.stages .slider__item').length > 1) {
  new ChiefSlider('.stages .slider')
}

$('.stages__top li').on('click', function (e) {
  e.preventDefault();
  if (!$(this).hasClass('stages__top__item--active') && !$(this).hasClass('stages__top__item--dec')) {
    $('.stages__top__item').removeClass('stages__top__item--active');
    $(this).addClass('stages__top__item--active');
    $(this).parents('.stages').find('.slider__indicators li').eq($('.stages__top .stages__top__item').index(this)).click();
  }
});

$('.stages .slider').on('transition-start', function (e) {
  $('.stages__top li').removeClass('stages__top__item--active');
  $('.stages__top li.stages__top__item').eq($('.stages .slider__indicators li.active').attr('data-slide-to')).addClass('stages__top__item--active');
  $('.stages__images img').css('display', 'none');

  $('.stages__images img').eq($('.stages .slider__indicators li.active').attr('data-slide-to')).addClass('stages__top__item--active').css('display', 'block');
});


// Cases

if ($('.cases .slider__item').length > 1) {
  new ChiefSlider('.cases .slider')
}

$('.cases .slider').on('transition-start', function (e) {
  const itemContent = $('.cases .slider__item').eq($('.cases .slider__indicators li.active').attr('data-slide-to'));


  const titleContent = $(itemContent).find('h3').contents();



  const panel = $('.cases__panel');

  panel.find('h3').text('');

  for (let i = 0; i < titleContent.length; i++) {
    const node = titleContent[i];
    panel.find('h3').append(node.cloneNode(true));
  }

  const values = $(itemContent).find('p');

  for (let i = 0; i < values.length; i++) {
    const value = $(values).eq(i).text();

    $(panel).find('p').eq(i).find('span').text(value);
  }
});

// Reviews

if ($('.reviews .slider__item').length > 1) {
  new ChiefSlider('.reviews .slider')
}

// Dealer

if ($('.dealer .slider__item').length > 1) {
  new ChiefSlider('.dealer .slider')
}

// Main-modal

// setTimeout(() => {
//   $('.main-modal .slider').each((i, el) => {
//     if ($(el).find('.slider__item').length > 1) {
//       new ChiefSlider(el);
//     }

//   })
// }, 4000)


