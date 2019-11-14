// Capitulo 10: Iterar for foreach
$(function(){
	$('#id_parrafo_10').hide();
	$('.cap_10_button').click(function(event) {
		//var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
		var numbers = [1,2,3,4,5,6,7,8,9,10];
		var cabecera="<tr>";
		console.log('Each');
		var contenido="";
		$.each(numbers, function(index, val) {
			 // iterate through array or object
			console.log('1º Each: ' + index + ':'+  val);
			if(val == 1){
				cabecera += '<th></th><th>' + val +'</th>';
			}else{
				cabecera += '<th>' + val +'</th>';
			}
			var item="<tr>";
			item += '<td>' + val+ '</td>';
			$.each(numbers, function(index2, val2) {
				 // iterate through array or object
				console.log('2º Each anidado: ' + index2 + ':'+  val2);
				item += '<td>' + val * val2 +'</td>';
			});
			item += '</tr>';
			contenido += item;
		});
		$('.table_mult').append(cabecera+"</tr>");
		$('.table_mult').append(contenido);

		console.log('For , size:' + numbers.length);
		for (var i = 0; i < numbers.length; i++) {
			console.log(numbers[i])
		}
		$('#id_parrafo_10').show(300);
		$('.cap_10_button').attr("disabled", true);
	});
});