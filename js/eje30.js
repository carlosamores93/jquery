// Capitulo 29: Ejemplo Ajax
$(function(){
	$('#h2_30_input').click(function(){

		sumar($('#h2_input_val1').val(), $('#h2_input_val2').val());


		function sumar(num1, num2){
			var parametros = {
				'val1': num1,
				'val2': num2
			};
			$.ajax({
				url: 'suma.php',
				//type: 'default GET (Other values: POST)',
				type: 'post',
				//dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
				data: parametros,
				beforeSend:function(){
					console.log('Procesando...');
				}
			})
			.done(function(data) {
				console.log("success");
				console.log(data);
				$('#h6_result_30').text(data)
			})
			.fail(function() {
				console.error("Error al realizar la llama ajax");
			})
			.always(function() {
				console.log("Complete Ajax");
			});
		}
	});
});