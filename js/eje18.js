// Capitulo 18: Metodo animate
// http://api.jquery.com/animate/
$(function(){
	$('#left').click(function(event) {
		$('.cubo').animate({left: '-=50px'}, 2000);
	});
	$('#right').click(function(event) {
		$('.cubo').animate({left: '+=50px'}, 2000);
	});

	$('#up').click(function(event) {
		$('.cubo').animate({top: '-=50px'}, 2000);
	});

	$('#down').click(function(event) {
		$('.cubo').animate({top: '+=50px'}, 2000);
	});
});