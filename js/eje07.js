// Capitulo 7 metodos css
$(document).ready(function($) {
	$('.cap_7_button').click(function(event) {
		$('.p_saludo_7').css({
			'border': '1px solid black',
			'color': 'red',
			'text-align': 'center'
		});

		$('.div_cap_7').css({
			'border': '1px solid blue',
			'color': 'blue',
			'text-align': 'center'
		});
	});
});