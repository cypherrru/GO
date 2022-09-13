import $ from 'jquery';

$('document').ready(function () {
    // ПРОВЕРКА ВЫДЕЛЕННОГО В "ИЗБРАННОЕ" ПРИ НАЖАТИИ НА СЕРДЕЧКО НА ТОВАРЕ
    $(".products__item-like").on('click', function () {
        // ПОЯВЛЕНИЕ И ИСЧЕЗАНИЕ ПОЛНОГО СЕРДЕЧКА
        var childrens = $(this).children();
        $(childrens[1]).toggleClass('hide')
        return false;
    })

    // ЕСЛИ ИНПУТ ПОИСКОВИКА ПУСТ, СКРЫТЬ КРЕСТИК ОЧИЩАЮЩИЙ ПОЛЕ
    if ($('.modal-search-input').val() == "") {
        $('.input-clear').addClass('hide')
    }

    // ПРИ КАЖДОМ ВВОДЕ С КЛАВИАТУРЫ В ИНПУТ ПРОВЕРЯТЬ ПУСТОТУ ПОЛЯ
    // ЕСЛИ ПОЛЯ ПУСТО, КРЕСТИК СДЕЛАТЬ НЕВИДИМЫМ
    $('.modal-search-input').keyup(function () {
        if ($(this).val() == "") {
            $(this).parent('.input-block').children('.input-clear').addClass('hide')
        } else {
            $(this).parent('.input-block').children('.input-clear').removeClass('hide')
        }
    });

    // ПРИ НАЖАТИИ НА КРЕСТИК В ИНПУТЕ ОЧИЩАТЬ ПОЛЕ И СКРЫТЬ КРЕСТИК
    $('.modal-search-input-clear').on('click', function () {
        $('.modal-search-input').val('')
        $('.modal-search-input-clear').addClass('hide')
    });

    // ПРИ НАЖАТИИ НА ФИЛЬТР (ТЕКСТ) СДЕЛАТЬ ЕГО АКТИВНЫМ И ПЕРЕМЕСТИТЬ НА ПЕРВОЕ МЕСТО
    $('.catalog__filters-mobail-item').on('click', function () {
        var order = $('.catalog__filters-mobail-item')
        $(this).toggleClass('catalog__filters-mobail-item--active')
        $(this).children('.catalog__filters-mobail-item-close').toggleClass('hide')
        $(this).insertBefore($(order[0]))
    })

    // ПРИ НАЖАТИИ НА ЛУПУ ВЫВЕСТИ МОДАЛКУ С ФОРМОЙ ПОИСКА И ЗАПРЕТИТЬ body ПРОКРУТКУ
    $('.catalog__serch-mobail').on('click', function () {
        $('#search-modal').removeClass('hide')
        $('body').addClass('no-overflow')
    })
    // ПРИ НАЖАТИИ НА ЗНАЧЕК ФИЛЬТРА ВЫВЕСТИ МОДАЛКУ С ФОРМОЙ ПОИСКА И ЗАПРЕТИТЬ body ПРОКРУТКУ
    $('.catalog__filters-mobail').on('click', function () {
        $('#filters-modal').removeClass('hide')
        $('body').addClass('no-overflow')
    })
    // ДАЛЕЕ ИДУТ ВЫВОДЫ МОДАЛОК ПРИ НАЖАТИИ НА ФИЛЬТР (ТЕКСТ)
    $('#gender-filter').on('click', function () {
        if ($(this).hasClass('catalog__filters-mobail-item--active')){
        $('#gender-modal').removeClass('hide')
        $('body').addClass('no-overflow')
        }
    })

    $('#price-filter').on('click', function () {
        if ($(this).hasClass('catalog__filters-mobail-item--active')){
        $('#price-modal').removeClass('hide')
        $('body').addClass('no-overflow')
        }
    })

    $('#collection-filter').on('click', function () {
        if ($(this).hasClass('catalog__filters-mobail-item--active')){
        $('#collection-modal').removeClass('hide')
        $('body').addClass('no-overflow')
        }
    })

    $('#category-filter').on('click', function () {
        if ($(this).hasClass('catalog__filters-mobail-item--active')){
        $('#category-modal').removeClass('hide')
        $('body').addClass('no-overflow')
        }
    })

    // ПРИ НАЖАТИИ НА КРЕСТИК В ЛЮБОЙ МОДАЛКЕ СВОРАЧИВАЕМ ИХ ВСЕ И РАЗРЕШАЕМ ПРОКРУТКУ body
    $('.modal__close').on('click', function () {
        $('.catalog__modal').addClass('hide')
        $('body').removeClass('no-overflow')
    })
    // ПРИ НАЖАТИИ НА КНОПКУ "ЗАКРЫТЬ" В ЛЮБОЙ МОДАЛКЕ СВОРАЧИВАЕМ ИХ ВСЕ И РАЗРЕШАЕМ ПРОКРУТКУ body
    $('.close-btn').on('click', function () {
        $('.catalog__modal').addClass('hide')
        $('body').removeClass('no-overflow')
    })

    if (window.innerWidth <= 768) {
        $('.go-back-bnt').removeClass('hide')
    }
})