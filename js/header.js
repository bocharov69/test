
$(document).ready(function (e) {
  function getStandartSectionSpacing(deviceWidth) {
    if (deviceWidth < 768) {
      return '80px';
    }
    if (deviceWidth < 1440) {
      return '100px';
    }

    if (deviceWidth >= 1440) {
      return '140px';
    }
  }
  function closeHeaderIfClickOutside(e) {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.some(el => el === document.querySelector(window.innerWidth < 768 ? '.header' : '.header__top__left'))) {
      $('.header').removeClass('header--opened');

      if (window.isPromo) {
        $('.header').addClass('header--op-08');
      }

      window.removeEventListener('click', closeHeaderIfClickOutside)
    }
  }

  $('#menu-toggle').on('click', () => {
    $('.header').toggleClass('header--opened');
    if (window.isPromo) {
      $('.header').toggleClass('header--op-08');
    }

    if ($('.header').hasClass('header--opened')) {
      window.addEventListener('click', closeHeaderIfClickOutside);
    }
  })
  $('.header__list__item').on('click', () => {
    $('.header').removeClass('header--opened');
    window.removeEventListener('click', closeHeaderIfClickOutside)
  })

  const sections = document.querySelectorAll('section');

  const onSectionLeaveViewport = (section) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;

            if (!element.classList.contains('promo')) {
              $('.header').removeClass('header--op-08');
              window.isPromo = false;
            } else {
              $('.header').addClass('header--op-08');
              window.isPromo = true;
            }


            const indicator = document.querySelector(`.header__list a[href="#${element.querySelector('a.anchor')?.id}"]`);

            if (indicator) {
              document.querySelectorAll('.header__list__item--active').forEach(el => el.classList.remove('header__list__item--active'));
              indicator.closest('.header__list__item').classList.add('header__list__item--active');
            }
            return;
          }
        })
      },
      {
        root: null,
        rootMargin: getStandartSectionSpacing(window.innerWidth),
        threshold: 0.75
      }
    );
    observer.observe(section);
  }

  sections.forEach(onSectionLeaveViewport);

})