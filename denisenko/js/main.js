$(document).ready(function(){

	$('.bxslider1').bxSlider({
		pager: false,
		minSlides: 2,
		maxSlides: 3,
		slideWidth: 260
	});
	$('.bxslider2').bxSlider({
		pager: false,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 740
	});

	// $('#two-click-list>li').click(function(e){
	// 	e.preventDefault();
	// 	$('#two-click-list>li').removeClass('two-click-li-active');
	// 	$(this).addClass('two-click-li-active').click(function(e){
	// 		e.preventDefault();
	// 		$(this).removeClass('two-click-li-active');
	// 	});
	// });

	$('#two-click-list>li').click(function(e){
		e.preventDefault();
		$(this).toggleClass('two-click-li-active');
	});

	 $(".popup").click(function(e) {
        e.preventDefault();
        $(".modal-wrapper").css("display","block")
        $("#modal-bg").fadeIn(600, function() {
                $("#modal-window").fadeIn(500);
            });
    });

    $("#modal-bg, .close-window").click(function(e) {
        e.preventDefault();
        $("#modal-bg").fadeOut(500);
        $("#modal-window").fadeOut(500);
    });

});