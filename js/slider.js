$(document).ready(function () {
    $('.slider').bxSlider({
        mode: 'horizontal',
        speed: 10,
        pager: true,
        controls: false,
        maxSlides: 1,
        auto: true,
        keyboardEnabled: true,

    })




    $(document).ready(function () {
 
        $('.hamburger').click(function () {
            $('.mobile-nav').slideToggle(500)
        })

        $('.mobile-nav').mouseleave(function(){
            $('.mobile-nav').slideUp()
        })
    })
    

})

