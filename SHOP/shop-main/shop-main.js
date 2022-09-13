import './styles/index.scss';
import $ from 'jquery';
import './slick/slick.min.js'
import './slick/slick.css';
import './slick/slick-theme.css';
import {
    toInteger
} from 'lodash';

$('document').ready(function () {

    // ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА БАНЕРА И ЕГО АВТОВОСПРОИЗВЕДЕНИЕ
    var itemCount = $('.shop__banner-item')
    itemCount = itemCount.length
    $('.shop__banner-swiper').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3500,
    });

    // ДОБАВЛЕНИЕ И УДАЛЕНИЕ АКТИВНОГО КЛАССА ДЛЯ ТОЧЕК СЛАЙДЕРА
    $('.shop__banner-swiper').on('afterChange', function (currentSlide) {
        var banners = $(".shop__switcher-dot")
        var currentSlide = $('.shop__banner-swiper').slick('slickCurrentSlide');

        if (currentSlide == 0) {
            banners[currentSlide].classList.add("shop__switcher-dot--active")
            $('.shop__switcher-dot').not(banners[currentSlide]).removeClass('shop__switcher-dot--active')
        } else if (currentSlide == itemCount - 1) {
            banners[2].classList.add("shop__switcher-dot--active")
            $('.shop__switcher-dot').not(banners[2]).removeClass('shop__switcher-dot--active')
        } else {
            banners[1].classList.add("shop__switcher-dot--active")
            $('.shop__switcher-dot').not(banners[1]).removeClass('shop__switcher-dot--active')
        }
    })

    // ИНИЦИАЛИЗАЦИЯ МАГАЗИННОГО СЛАЙДЕРА
    $(".shop__swiper").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 769,
                settings: "unslick"
            }
        ]
    });

    // ПРОВЕРКА ВЫДЕЛЕННОГО В "ИЗБРАННОЕ" ПРИ НАЖАТИИ НА СЕРДЕЧКО НА ТОВАРЕ
    $(".products__item-like").on('click', function () {
        // ПОЯВЛЕНИЕ И ИСЧЕЗАНИЕ ПОЛНОГО СЕРДЕЧКА
        var childrens = $(this).children();
        $(childrens[1]).toggleClass('hide')
        return false;
        /*         // ПОЯВЛЕНИЕ И ИСЧЕЗАНИЕ КНОПКИ "ИЗБРАННОЕ" ВВЕРХУ СТРАНИЦЫ
                var favorites = $('.like-active')
                var likeHideCount = 0
                for (var i = 0; i < favorites.length; i++) {
                    if (favorites[i].classList[1] == 'hide') {
                        likeHideCount++
                    }
                }

                if (favorites.length != likeHideCount) {
                    $('.favorites-image').removeClass('hide')
                }
                else {
                    $('.favorites-image').addClass('hide')
                } */
    })
})
