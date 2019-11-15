// Capitulo 25 JSON parse
$(function(){
	console.log("********************** JSON.parse() ********************");
	var cad = '{"name": "Carlos", "lastname": "Amores", "edad":"20"}';
	console.log(cad);
	var obj = JSON.parse(cad);
	console.log(obj.name);
	console.log(obj.lastname);
	console.log(obj.name + ' ' + obj.lastname + ' ' + obj.edad);
	console.log("********************** JSON.parse() ********************");
});