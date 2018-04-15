document.getElementById("calculate-button").onclick = function () {
	var num1 = parseInt(document.getElementById("elem-1").value);
	var num2 = parseInt(document.getElementById("elem-2").value);


	if(isNaN(num1)){
		alert("Utilize apenas números!");
		document.getElementById("elem-1").focus();
	} else if(isNaN(num2)){
		alert("Utilize apenas números!");
		document.getElementById("elem-2").focus();
	} else {
		
		// get the numbers inside input elements
		let elem1 = document.getElementById('elem-1');
		let elem2 = document.getElementById('elem-2');

		let choice = document.querySelector('input[name="operation"]:checked');

		let val1 = parseInt(elem1.value);
		let val2 = parseInt(elem2.value);
		let sum = val1 + val2;

		let operation = choice.value;
		let operationResult = getResult(val1, val2, operation);

		//Display result inside element with id "result"
		let resultElement = document.getElementById('result');
		resultElement.innerHTML = operationResult;
	}

}
/**
* Returns the result of an operation over two number.
* Arguments: two valid numbers and one operation symbol.
* supports sum, subtraction, multiplication and division.
*/
function getResult(val1, val2, symbol) {
	if(symbol === '+') {
		//retornar soma
		return val1 + val2;
	} else if (symbol === '-') {
		//retornar substração
		return val1 - val2;
	} else if (symbol === '*') {
		//retornar multiplicação
		return val1 * val2;
	} else if (symbol === '/') {
		//retornar divisão
		return val1 / val2;
	}
}	
