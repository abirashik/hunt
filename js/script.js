$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 500){
    $(".menu").addClass("sticky")
  }else{
    $(".menu").removeClass("sticky")
  }

  if($scrollamout > 1000){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})



// banner slider
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    fade:true,
    prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // venubox
  $('.venobox').venobox();


  // service slider
  $('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-arrow-circle-up sprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-down snext" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // testi slider
  $('.testi-slider .left').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding:0,
    prevArrow: '<i class="fa fa-arrow-circle-up sprev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-down snext" aria-hidden="true"></i>',
    asNavFor: '.testi-slider .right'
  });


  $('.testi-slider .right').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true,
    // centerMode: true,
    // centerPadding:0,
    // fade: true,
    arrows: false,
    asNavFor: '.testi-slider .left'
  });


  // counter up js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});