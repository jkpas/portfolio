$(document).ready(function () {
    $('.bxslider').bxSlider({
        adaptiveHeight: true,
        captions: false,
        pager: false
    });

    $(".form_box .tab").click(function () {

        $(".form_box .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()

    }).eq(0).addClass("active");

    var activ = 'c1';
    $('#c1').prop('checked', true);
    $(".main_form .tab").click(function () {
        var id = $(this).attr('for');
        if (activ !== id) {
            $('.pay_box').removeClass('show');
            $('[data-idradio="' + id + '"]').addClass('show');
            activ = id;
        }
        //$(".main_form .tab").removeClass("active").eq($(this).index()).addClass("active");
        //$(".pay_box").hide().eq($(this).index()).fadeIn()

    }).eq(0).addClass("active");

    var act = 'op1';
    $(".tab-var").click(function () {
        var id = $(this).attr('for');
        if (act !== id) {
            $('.val-box').removeClass('show');
            $('[data-idradio="' + id + '"]').addClass('show');
            act = id;
        }

    }).eq(0).addClass("active");

    $('.next').click(function() {
        $('.tournament-2').removeClass('show');
        $('.tournament-1').addClass('show');
        return false;
    });

    $('.next2').click(function() {
        $('.duel-1').removeClass('show');
        $('.duel-2').addClass('show');
        return false;
    });

    $('.next3').click(function() {
        $('.duel-2').removeClass('show');
        $('.duel-3').addClass('show');
        return false;
    });

    $('.slider-input').jRange({
        from: 0,
        to: 10000,
        step: 10,
        scale: [0,10000],
        format: '%s',
        width: 370,
        showLabels: true
    });
});

