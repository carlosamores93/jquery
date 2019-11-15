// Capitlo 15: Eventos de teclado
$(function(){
	var i = 0;
	$('#input_text').keydown(function(event) {
		$('#input_text').css('background-color', 'red');
		$('#span_pul').text(i+=1);
	});
	$('#input_text').keypress(function(event) {
		//$('#span_pul').text(i+=1);
	});
	$('#input_text').keyup(function(event) {
		$('#input_text').css('background-color', 'white');
		let input = $('#input_text').val();
		let len = input.length;
		$('#span_letras').text(len);
	});
});