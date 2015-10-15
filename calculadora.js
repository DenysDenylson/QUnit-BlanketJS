function sumar(num1, num2) {
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
	return num1 + num2;
};

$(document).ready(function () {

	$("#button1").click(function () {
		var numero1 = $("#arg1").val();
		var numero2 = $("#arg2").val();
		
		var resultado = sumar(numero1, numero2);
		
		$("#output").text(resultado);
	});

});