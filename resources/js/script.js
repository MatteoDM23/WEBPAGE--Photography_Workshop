$(document).ready(function() {
    /* scroll on buttons */
    $('.js--scroll-to-contacts').click(function() {
        $('html, body').animate({scrollTop: $('.contacts').offset().top}, 1000);
    });
});