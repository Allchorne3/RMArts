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

    // Mobile Filter Accordion

    
    const accordionButton = document.querySelector('.accordion-button');

    accordionButton.addEventListener('click', function(){
        const accordionContent = accordionButton.nextElementSibling;
        
        accordionButton.classList.toggle('accordion-button-active');
        
        if(accordionButton.classList.contains('accordion-button-active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
        
    });    

    // Back To Top
    //Header transparency on scroll
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop()

       
        if(wScroll > ($('main').height() / 3)) {
        $('.btt-btn').css("bottom", "50px")
        } else {
        $('.btt-btn').css("bottom", "-70px")
        }
    })
  
    
})