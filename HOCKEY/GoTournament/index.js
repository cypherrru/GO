import './styles/index.scss';
import $ from 'jquery';
import './slick/slick.min.js'
import './slick/slick.css';
import './slick/slick-theme.css';

  $('.go-tournament__swiper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1
      }
    }
  ]
});
