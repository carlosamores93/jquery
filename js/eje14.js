// Capitulo 14: Efectos, ocultar, mostrar
$(function(){
	$('#btnVer').click(function(event) {
		//$('#img_b_s_c').slideDown();
		$('#img_b_s_c').animate({
			height: 200
		});
		//$('.img_b_s_c').slideDown(5000);
		$('.img_b_s_c').fadeIn(5000);
	});
	$('#btnOcultar').click(function(event) {
		//$('#img_b_s_c').slideUp();
		//$('.img_b_s_c').slideUp(5000);
		$('.img_b_s_c').fadeOut(5000);

		$('#img_b_s_c').animate({
			height: 10	
		}, 5000);
	});
});