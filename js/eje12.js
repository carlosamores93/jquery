// Capitulo 12: Metodo attr y .click :)
$(function(){
	$('#flow').click(function(event) {
		$('#flow').attr({
			width: '200'
		});

	});
	$('.flow').click(function(event) {
		$('.flow').attr({
			src: 'img/bsc.png',
			width: '200'
		});
	});
	$('.img_nengo').click(function(event) {
		let src_nengo = $('.img_nengo').attr('src');
		let src_barcelona = $('.img_bsc').attr('src');
		$('.img_bsc').attr({
			src: src_nengo,
			width: '200'
		});
		$('.img_nengo').attr({
			src: src_barcelona,
			width: '200'
		});
	});
	$('.img_bsc').click(function(event) {
		let src_nengo = $('.img_nengo').attr('src');
		let src_barcelona = $('.img_bsc').attr('src');
		$('.img_nengo').attr({
			src: src_barcelona
		});
		$('.img_bsc').attr({
			src: src_nengo
		});
	});
});