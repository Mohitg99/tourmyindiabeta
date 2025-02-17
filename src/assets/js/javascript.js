$(document).ready(function () {

  // ------------------------------ Popular Tour
    $('.popular-tour-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<span class="prev-arrow-02 "><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="next-arrow-02 "><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });

    // --------------------------Popular Destination
    $('.popular-dest-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<span class="prev-arrow-02 "><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="next-arrow-02 "><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });

    // -------------------------- Top Attractions
    $('.top-attr-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<span class="prev-arrow-02 "><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow:'<span class="next-arrow-02 "><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });

      // --------------------------- Toggle collapse

  $('.toggle-active').click(function () {
    var collapse_content_selector1 = $(this).attr('href');
    var toggle_switch1 = $(this);
    $(collapse_content_selector1).slideToggle(function () {
      if ($(this).css('display') == 'none') {
        toggle_switch1.html('Read More <i class="fa fa-angle-right" aria-hidden="true"></i>');
      } else {
        toggle_switch1.html('Less <i class="fa fa-angle-left" aria-hidden="true"></i>');
      }
    });
  })
})