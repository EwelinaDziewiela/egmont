$(document).ready(function () {

    function validateEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    $('.newsletter-submit__btn').click(function (e) {
        var sEmail = $('#freshmail_email').val();
        if (validateEmail(sEmail)) {
            $(".validation-alert").css("display", "none");
        }
        else {
            $(".validation-alert").css("display", "block");
            e.preventDefault();
        }
    });
});

// $(document).on('click','.navbar-collapse.in',function(e) {
//     if( $(e.target).is('a') ) {
//         $(this).collapse('hide');
//     }
// });

$(".menu-icon").click(function() {
   $(".navbar-mobile").toggleClass("navbar-mobile__visible");
});