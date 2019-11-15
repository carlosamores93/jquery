// Capitulo 21: Eventos del scroll
// https://api.jquery.com/scroll/
// https://api.jquery.com/scrollTop/
$(function(){
	$('#volver-arriba').click(function() {
		alert($(this).scrollTop() + " px");
		console.log('volver-arriba')
		$('#body__id').animate({scrollTop: 0}, '700');
		alert('Vuelvo arriba, no funciona esta m...');
	});
	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 100) {
			console.log('Scroll mayor de 100 pixeles');
		}else{
			console.log('Scroll MENOR de 100 pixeles');
		}
		console.log('Scroll del body' + $('#body__id').scrollTop() + " px");
	});
	$("#button__id").click(function(){
        alert($("#div__id__klk").scrollTop() + " px");
        alert("Vuelvo arriba");
        $("#div__id__klk").animate({scrollTop: 0}, '700');
    });
});