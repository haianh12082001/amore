AOS.init();
$(document).ready(function () {
    // BANNER SLIDER
    $(".banner__slides").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    });
    
    //CLICK NEXT PROJEC
    
    $(".villa__list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:true,
            prevArrow: '<button class="click__left"><i class="fas fa-arrow-left btn"></i></button>',
            nextArrow: '<button class="click__right"><i class="fas fa-arrow-right btn"></i></button>',
        // prevArrow: $('  .click__left'),
        // nextArrow: $(' .click__right'),

    });
    $(".project1__list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        // arrows:false,
            prevArrow: '<button class="click__left"><i class="fas fa-arrow-left btn"></i></button>',
            nextArrow: '<button class="click__right"><i class="fas fa-arrow-right btn"></i></button>',
        // prevArrow: $('.click__left'),
        // nextArrow: $('.click__right'),

    });
    $(".feedback__list").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 3000,
        dots:true,
        prevArrow: '<button class="prevFeedback"><i class="fas fa-arrow-left btn"></i></button>',
        nextArrow: '<button class="nextFeedback"><i class="fas fa-arrow-right btn"></i></button>',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 2000,
                    autoplaySpeed: 3000,
                  infinite: true,
                  dots: true
                }
              },
        ]
    });
    
    $(".product").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 3000,
        dots:true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                //   infinite: true,
                //   dots: true
                }
              },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    });
    $(".news__list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,  
        speed: 2000,
        autoplaySpeed: 3000,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                //   infinite: true,
                //   dots: true
                }
              },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
                },
             
        ]
    });

    ///show menu mobi///
    $('.bars__mobi').click(function(){
        $('.header__list').toggleClass('active');
        $('.fa.fa-bars').toggleClass('fas fa-times');
    })

});
