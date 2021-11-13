var start = new Date();
console.log(start);


function ageCalc(){
	var age = prompt("Please enter your age:");

	current = start.getFullYear();

	fin = (current - age);

	if ((age != null) && (age > 0) && (age < 120)) {
    	document.getElementById("answer").innerHTML = "You were born in: " + fin; 
  }
}