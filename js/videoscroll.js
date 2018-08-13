(function($){
	$.fn.vscroll = function(){
		var video = $(this);
		var alto = video.height();
		var ancho = video.width();
		$(window).scroll(function(){
			var posicion = $(window).scrollTop();
			console.log(posicion);
			if(posicion >= 400){
				video.css({
					position: 'fixed',
					width: '280px',
					height: '160px',
					bottom: '10px',
					left: '10px'
				});
			}else{
				video.css({
					position: 'relative',
					width: ancho,
					height: alto
				});
			}
		});
	};

	$.fn.eliminarVideo = function(){
		var eliminar = $(this);
		var alto = eliminar.height();
		var ancho = eliminar.width();
		$(window).scroll(function(){
			var posicion = $(window).scrollTop();
			console.log(posicion);
			if(posicion >= 400){
				eliminar.css({
					position: 'fixed',
					width: '50px',
					height: '20px',
					bottom: '170px',
					left: '120px',
				});
			}else{
				eliminar.css({
					position: 'relative',
					width: ancho,
					height: alto
				});
			}
		});
	};
}(jQuery))