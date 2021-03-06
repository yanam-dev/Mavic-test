// import { on } from "events";

$(function(){

    $('.about__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
        infinite: false,
    });

   $('.query__item-title').on('click', function(){
       
    $('.query__item').removeClass('query__item--active');
    $(this).parent().addClass('query__item--active');

   });

   $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        menu: '#header__nav',
        anchors:['top', 'about', 'benefit', 'property', 'query', 'contact'],
    
    }); 

    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--active');
    });
    
});