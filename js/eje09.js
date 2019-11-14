// Capitulo 9: Show and hide
// Nos permite mostrar/ocultar elementos
$(document).ready(function($) {

	$('.cap_9_button').click(function(event) {
		if($('#id_parrafo_9').hasClass('p_9_parrafo')){
			// Tiempo que tarda en  mostrar el contenido
			$('#id_parrafo_9').hide(5000);
			$('#id_parrafo_9').removeClass('p_9_parrafo');
		}else{
			//alert('No tiene la clase, oculto divs');
			$('#id_parrafo_9').show(3000);
			$('#id_parrafo_9').addClass('p_9_parrafo')
		}
	});
});