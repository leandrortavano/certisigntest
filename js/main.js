$(function () {
    $('.menu_icon').click(function () {
        $('.menu_bar').fadeToggle();
    });

    $('.dark-screen-mod').fadeIn(500);
    $('.modal').fadeIn(500);

    $('.dark-screen-mod').click(function () {
        $('.modal').fadeOut();
        $('.dark-screen-mod').fadeOut();
    });
    $('.j_close').click(function () {
        $('.modal').fadeOut();
        $('.dark-screen-mod').fadeOut();
    });
    
    $('.main_destaque').css('margin-top', $('.main_header').outerHeight());
    $(window).resize(function () {
        $('.main_destaque').css('margin-top', $('.main_header').outerHeight());
    });

    function goToByScroll(id) {
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - $('.main_header').outerHeight() + 100},
                1000);

    }
    $(".menu > li").click(function (e) {

        e.preventDefault();

        goToByScroll(this.id);
        var u = this.id.replace("link", "");
        window.location.hash = u;
    });
});