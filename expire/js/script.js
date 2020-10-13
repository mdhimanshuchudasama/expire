$(document).ready(function(){

    // Banner owl carousel
    $('.banner-carousel').owlCarousel({
        items:1,
        // loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoPlaySpeed:1000,
        autoplayHoverPause:true
    }); 


    // Blog Owl carousel 
    $('.recent-blogs').owlCarousel({
        loop:true,
        margin:10,
        autoplayTime: 2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: true,
                loop: false
            }
        }
    }); 
});



    // $('.recent-blogs').owlCarousel({
    //     margin:10,
    //     loop: true,
    //     nav:true,
    //     // autoplayTime: 2000,
    //     // autoplayHoverPause:true,
    //     responsive: {
    //         0:{
    //             item:1,
    //             nav:true
    //         },
    //         600:{   
    //             item:2,
    //             nav:true
    //         },
    //         1000:{
    //             item:3,
    //             nav:true
    //         }
    //     }


        
    // });   