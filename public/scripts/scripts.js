$(document).ready(function() {
    $(function() {
        $(window).on('load resize', function() {
            $('.fill-screen').css('height', window.innerHeight);
        });
    });
    
    $("#video-wallpaper").wallpaper({
        source: {
            poster: "../images/landing_bkg.png",
            video: "//www.youtube.com/embed/zSUtUG3y3b4&index=63&list=PLdvyw4s_Y87UD9IIEPqbq47qEmd84QSLb&t=16s"
            // webm: "http://example.com/video.webm",
            // mp4: "../video/landing_bkg.mp4,
            // ogg: "http://example.com/video.ogv"
        }
    }); // end video function

})