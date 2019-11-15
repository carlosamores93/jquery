// Capitulo 27: Método Get en Ajax
$(function(){
	$.get('ejemplo.html', function(data){
		console.log(data);
		$('#h6_result_html').text(data)
	});

	$.get('ejemplo.php', {nombre: 'Carlos Amores'}, function(data){
		console.log(data);
		$('#h6_result_php').text(data)
	});
});