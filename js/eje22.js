// Capitulo 22: Crear, copiar, mover y remover elementos
// http://api.jquery.com/append/  http://api.jquery.com/appendto/
// http://api.jquery.com/prepend/ http://api.jquery.com/prependto/
// https://api.jquery.com/clone/ https://api.jquery.com/remove/
$(function(){
	$('#btn_exe_add').click(function(event) {
		// Agrega elemento al final de la lista
		$('ol.ol_class_crud').append('<li> New element </li>');
		//$('ol.ol_class_crud').append('Some text');
		// Agrega al princioio de la lista
		$('ol.ol_class_crud').prepend('<li> First element </li>');
	});
	$('#btn_exe_mv_down').click(function(event) {
		// Primer elemento a la ultima
		$('ol.ol_class_crud').append($('ol.ol_class_crud li:first'));
	});
	$('#btn_exe_mv_up').click(function(event) {
		// Ultimo elemento en la primera
		$('ol.ol_class_crud').prepend($('ol.ol_class_crud li:last'));
	});
	$('#btn_exe_clone').click(function(event) {
		var clone = $('ol.ol_class_crud li:last').text();
		console.log(clone);
		$('#h2__22').append(clone);
	});
	$('#btn_exe_dlt').click(function(event) {
		$('ol.ol_class_crud li:last').remove();
	});
});