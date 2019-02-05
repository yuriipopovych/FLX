function quadraticEquation () {
	var a = prompt("Input value of 'a', please");
	var b = prompt("Input value of 'b', please");
	var c = prompt("Input value of 'c', please");

	if ( isNaN(a) || isNaN(c) || isNaN(c)) {
		alert("Not a Number");
	} else if (a === "" || b === "" || c === "" ) {
		alert("You`ve missed one of numbers. Reload the page and try again, please.");
	} else {
		var discriminant = (b * b) - 4 * a * c;
		if ( discriminant > 0) {
			var x1 = (-b + Math.sqrt(discriminant)) / ( 2 * a);
			var x2 = (-b - Math.sqrt(discriminant)) / ( 2 * a);
			alert("x1 = " + x1 + ";" + " x2 = " + x2 + ";");
		} else if ( discriminant === 0 ) {
			var x = -b / (2 *a);
			alert("x = " + x + ";");
		} else {
			alert("no solution");
		}
	}
}
quadraticEquation();