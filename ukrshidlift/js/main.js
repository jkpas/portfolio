$(document).ready(function(){

  $('.bxslider1').bxSlider({
  	pager: false
  });

  $('.bxslider2').bxSlider({
  	slideMargin: 16,
  	maxSlides: 4,
  	minSlides: 1,
  	slideWidth: 220
  });

$("#hamb-btn").click(function(){
	$(".header-nav").toggle( "slow", function(){
	});
});


});