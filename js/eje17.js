// Capitulo 17: Metodo Data
// http://www.etnassoft.com/2011/03/26/jquery-data/
$(function(){
	console.log("*********** DATA  ************")
	$('#ul_colors li').each(function(index, val) {
		$('#ul_colors').data('index', index);
		console.log($('#ul_colors').data('index'));
		$('#ul_colors').data('value', val);
		console.log($('#ul_colors').data('value'));
	console.log("*********** DATA  ************")
	});
});