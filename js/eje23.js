// Capitulo 23.- Curso jQuery - Padres, Hijos, Hermanos de Elementos
// https://api.jquery.com/children/
// https://api.jquery.com/parent/
// https://api.jquery.com/siblings/

$(function(){
	console.log("****************** children() parent() siblings() **************");
	let hijos = $('#padre_ol').children();
	console.log('children()');
	console.log(hijos);

	let hijosText = $('#padre_ol').children().text();
	console.log('children().text()');
	console.log(hijosText);

	let papa = $('.hijo_li').parent();
	console.log('parent()');
	console.log(papa);

	let hermanosText = $('.hijo_li').siblings().text();
	console.log('siblings().text()');
	console.log(hermanosText);

	let hermanos = $('.hijo_li').siblings();
	console.log('siblings()');
	console.log(hermanos);
	console.log("****************** children() parent() siblings() **************");
});