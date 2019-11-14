// Capitulo 11: iterar elementos con for of
$(function(){
	console.log("******** EJE 11 ***********");
	var numbers = [1,2,3,4,5,6,7,8,9,10];
	var num;
	for(let num of numbers) {
		console.log(num);
	}
	var klks = [{
		'colors':[
			{
				'color' : 'red',
				'hexValue' : '#f00'
			},
			{
				'color' : 'green',
				'hexValue' : '#0f0'
			},
			{
				'color' : 'blue',
				'hexValue' : '#00f'
			}
		]
	}];
	var klk;
	for(let klk of klks) {
		console.log(klk);
		console.log(klk.colors[0].color);
	}
	console.log("******** FIN EJE 11 ***********");
});