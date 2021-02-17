$(function(){

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      }
    ]
  });

    $('.reviews__slider').slick ({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1
    })

    $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active')
    });
});
