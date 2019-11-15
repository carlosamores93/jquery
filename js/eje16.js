// Capitulo 16: Eventos del mouse
// https://api.jquery.com/category/events/mouse-events/
$(function(){
	$('#icon_triste').mousedown(function(event) {
		$('#icon_triste').addClass('fa-smile').removeClass('fa-frown');
		//$('.hola_carlos').text('Carlos Amores');
	});
	/*$('#icon_triste').mouseover(function(event) {
		$('#icon_triste').addClass('fa-frown').removeClass('fa-smile');
	});*/
	/*$('.hola_carlos').mouseover(function(event) {
		$('.hola_carlos').text('Carlos Amores');
	});*/
});