$(document).ready(function() {
    $(function() {
        $(window).on('load resize', function() {
            $('.fill-screen').css('height', window.innerHeight);
        });
    });

    // Scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160 // offsetting line 17
    }); // end scroolspy

    // smooth scrolling jquery.easing
    $('.nav a, .down-button a, .overlay-banner a, .footer-nav a, .banner-btns a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    }); // end smooth scrolling

    // parallax scrolling with stellar.js
    $(window).stellar();
    
    // adding video from youtube/mp4 as header
    $("#video-wallpaper").wallpaper({
        source: {
            poster: "../images/landing_bkg.png",
            mp4: "../video/Plexus_AfterEffects.mp4"
        }
    }); // end video function

    // initialize WOW for element animation
    new WOW().init();

     // initialize slick
     $('.project-container').slick({
        dots: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 8000,
        draggable: true
        // nextArrow: '<i class="fa fa-arrow-right"></i>',
        // prevArrow: '<i class="fa fa-arrow-left"></i>'
      });

}); // end document.ready
