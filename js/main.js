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

