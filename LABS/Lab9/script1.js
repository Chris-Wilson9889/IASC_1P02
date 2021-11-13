var start = new Date();
console.log(start);


function stopTime(){
	var stop = new Date();
	console.log(stop);

	var fin = stop - start;

	fin1 = fin/600;
	fin1 = fin1.toFixed(3);

	alert("You have been on the page for: " + fin1 + " seconds");
}