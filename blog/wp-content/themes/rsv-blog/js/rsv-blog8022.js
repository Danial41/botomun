const sticky = new Sticky('.site-header');
const sticky2 = new Sticky('.banner-test');
const sticky3 = new Sticky('.banner-mail');

( function( $ ) {
  if ($(window).width() <= 1100 ) {
    $('.footer-jumbo-item-heading').on('click', function() {
      $( this ).toggleClass('collapsed');
      $( this ).siblings('.footer-jumbo-item-links').toggleClass('collapsed');
    }).addClass('collapsed').siblings('.footer-jumbo-item-links').addClass('collapsed');
  }

  if ($(window).width() <= 913 ) {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 48,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  } else {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 72,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  $('.header-hamburger').on('click', function() {
    $('.mobile-navigation').toggleClass('active');
  })

  $('.search-submit-activate').on('click', function(event) {
    if (!$(this).siblings('.search-field').is(':visible')) {
      event.preventDefault();
    }
    $(this).siblings('.search-field').show(600);
  })

} )( jQuery );