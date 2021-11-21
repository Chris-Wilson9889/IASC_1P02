console.log("Executing");

function doAdd(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
  	
  	num1 = parseInt(num1);
  	num2 = parseInt(num2);

	var fin = (num1 + num2);

	document.getElementById("output").innerHTML = fin;
}

function doSub(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
  	
  	num1 = parseInt(num1);
  	num2 = parseInt(num2);

	var fin = (num1 - num2);

	document.getElementById("output").innerHTML = fin;
}

function doMul(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
  	
  	num1 = parseInt(num1);
  	num2 = parseInt(num2);

	var fin = (num1 * num2);

	document.getElementById("output").innerHTML = fin;
}

function doDiv(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
  	
  	num1 = parseInt(num1);
  	num2 = parseInt(num2);

	var fin = (num1 / num2);

	document.getElementById("output").innerHTML = fin;
}