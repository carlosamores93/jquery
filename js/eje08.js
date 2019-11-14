// Capitulo 8: Manejo de clases
$(document).ready(function($) {
	$('.cap_8_button').click(function(event) {
		// hasClass return bool
		if($('#id_parrafo_8').hasClass('p__parrafo_class')){
			console.log('Tiene la clase p__parrafo_class');
			// Voy a borrar la clase
			$('#id_parrafo_8').removeClass('p__parrafo_class');
		}else{
			console.log('No tiene la clase');
			$('#id_parrafo_8').addClass('p__parrafo_class')
		}
	});
});