// Capitulo 24 Creando elementos virtuales

$(function(){
	$('#btn_exe_create').click(function(event) {
		var li = $('<li>');
		$(li).addClass('virtual_elemt')
		$(li).text('Dame click')
		$('#padre_ol_24').append(li);

		var li_text = $('<li>', {text: 'Virtual element', class: 'class_para_virtal_element'});
		$('#padre_ol_24').append(li_text);

		$('.virtual_elemt').click(function(event) {
			alert("Me has dado click!!!");
		});
	});

});