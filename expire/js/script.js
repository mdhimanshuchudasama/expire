$(document).ready(function() {
    $(window).on('hashchange', function() {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    });
    
    $('a[href*="#"]').on('click', function(event) {
    let hash = this.hash;
    if (hash) {
        event.preventDefault();
        $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
        }, 750, function() {
        window.location.hash = hash;
        });
    }
    });

    // Banner owl carousel
    $('.banner-carousel').owlCarousel({
        items: 1,
        // loop:true,
        nav: true,
        dots: true,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoplayHoverPause: true
    });


    // Blog Owl carousel 
    $('.recent-blogs').owlCarousel({
        // loop: true,
        
        // autoplayTime: 2000,
        // autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
            0: {
                items:0,
                nav: false,
                // loop:true
            },
            411:{
                items:1,
                margin: 10,
                nav:true
            },
            768: {
                items: 2,
                margin: 10,
                nav: true,
                // loop:true
            },
            992:{
                items: 3,
                margin: 10,
                nav: true,
                // loop: true
            }
        }
    });
});

