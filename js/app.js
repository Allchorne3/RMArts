$(function(){
    $('.list').on("click", function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show(250);
        } else {
            $('.itemBox').not('.'+value).hide(250).removeClass("appear");
            $('.itemBox').filter('.'+value).show(250).addClass("appear");
        }
    })

    // Now Add/Remove active class
    $('.list').on("click", function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // Owl Carousel
    $("#owl-slider").owlCarousel({
 
        navigation : false, // Show next and prev buttons
        autoplay: true,
        autoplayTimeout: 7500,
        autoplaySpeed : 2000,
        autoplayHoverPause: true,
        paginationSpeed : 800,
        loop: true,
        touchDrag: true,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
    
})