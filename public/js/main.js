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
    $('.nav a, .down-button a, .overlay-banner a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    }); // end smooth scrolling

    // parallax scrolling with stellar.js
    $(window).stellar();
    
    // adding video from youtube/mp4 as header
    $("#video-wallpaper").wallpaper({
        source: {
            poster: "../images/landing_bkg.png",
            video: "//www.youtube.com/embed/zSUtUG3y3b4&index=63&list=PLdvyw4s_Y87UD9IIEPqbq47qEmd84QSLb&t=16s"
            // webm: "http://example.com/video.webm",
            // mp4: "../video/landing_bkg.mp4,
            // ogg: "http://example.com/video.ogv"
        }
    }); // end video function

}); // end document.ready
