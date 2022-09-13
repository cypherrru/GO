import $ from 'jquery';

$('document').ready(function () {
    // ПРОВЕРКА ВЫДЕЛЕННОГО В "ИЗБРАННОЕ" ПРИ НАЖАТИИ НА СЕРДЕЧКО НА ТОВАРЕ
    $(".products__item-like").on('click', function () {
        // ПОЯВЛЕНИЕ И ИСЧЕЗАНИЕ ПОЛНОГО СЕРДЕЧКА
        var childrens = $(this).children();
        $(childrens[1]).toggleClass('hide')
        return false;
    })
})