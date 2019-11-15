// Capitulo 13: Dimensiones
$(function(){
	$('.img_barcelona_sc').click(function(event) {
		console.log("*********** height() / width()  ************")
		let h = $('.img_barcelona_sc').height();
		let w = $('.img_barcelona_sc').width();
		console.log("Altura: " + h + ", ancho: " + w);
		$('.img_barcelona_sc').width(50).height(50);
		console.log("*********** height() / width()  ************")
	});
});