// Capitulo 6
$(document).ready(function($) {
	$('.cap_6_button').click(function(event) {
		console.log('CAP 6 INI');
		var p_carlos = $('.p_carlos_amores').html();
		console.log(p_carlos);
		// Attr: obtener y asignar un valor
		var class_attr = $('.span_salvador').attr('class');
		console.log(class_attr);
		// Attr: renombramos clase
		var class_attr_new = $('.span_salvador').attr('class', 'salvador_carlos');
		console.log(class_attr_new);
		// Attr: id
		var new_id = $('p.p_csam').attr('id', 'csam_id');
		console.log(new_id);


		var text1 = $('.p_csam').text();
		var text2 = $('.salvador_carlos').text();
		$('.p_csam').text(text2);
		$('.salvador_carlos').text(text1);
		console.log('CAP 6 FIN');

	});
});