$(function () {



    $('.chart_slide').slick({
        slidesToShow: 3,
        arrows: false,
    });

    $('.movie_chart .arrows .left').on('click', function () {
        $('.chart_slide').slick('slickPrev');
    });
    $('.movie_chart .arrows .right').on('click', function () {
        $('.chart_slide').slick('slickNext');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 600 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
        //show, hide   fadeIn, fadeOut 으로 대체 가능
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 600 ? $('.to_go').addClass('on') : $('.to_go').removeClass('on');
        //show, hide   fadeIn, fadeOut 으로 대체 가능
    });


});

$(function () {
    $('#bg_video').YTPlayer({
        videoURL: 'aa0WjdSYdCk',
        containment: '.main_visual',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.main_visual .pause').on('click', function () {
        $('#bg_video').YTPPause();
    });
    $('.main_visual .play').on('click', function () {
        $('#bg_video').YTPPlay();
    });
})

