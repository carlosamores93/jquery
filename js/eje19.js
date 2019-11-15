// Capitulo 19: Metodo animate parte 2
// http://api.jquery.com/animate/
$(function(){
	$('body').keyup(function(event) {
		if(event.keyCode == 37){
			$('.cubo').animate({left: '-=50px'}, 'fast');
		}else if(event.keyCode == 39){
			$('.cubo').animate({left: '+=50px'}, 'fast');
		}else if(event.keyCode == 38){
			$('.cubo').animate({top: '-=50px'}, 'slow');
		}else if(event.keyCode == 40){
			$('.cubo').animate({top: '+=50px'}, 2000);
		}else{
			console.log('No ha presionado las teclas de direccion');
		}
	});
});