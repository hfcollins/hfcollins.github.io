// JavaScript source code

var $ = function (id) { return document.getElementById(id); };




var displayResults = function () {
	var grade1 = $("grade1").value;
	var grade2 = $("grade2").value;
	var grade3 = $("grade3").value;

	var credit1 = parseInt($("credit1").value);
	var credit2 = parseInt($("credit2").value);
	var credit3 = parseInt($("credit3").value);

	if (grade1 == 'A') {
		numGrade1 = 4.0;
	}
	else if (grade1 == 'B') {
		numGrade1 = 3.0;
	}
	else if (grade1 == 'C') {
		numGrade1 = 2.0;
	}
	else if (grade1 == 'D') {
		numGrade1 = 1.0;
	}
	else if (grade1 == 'F') {
		numGrade1 = 0.0;
	}
	else {
		numGrade1 = 0.0;
	}


	if (grade2 == 'A') {
		numGrade2 = 4.0;
	}
	else if (grade2 == 'B') {
		numGrade2 = 3.0;
	}
	else if (grade2 == 'C') {
		numGrade2 = 2.0;
	}
	else if (grade2 == 'D') {
		numGrade2 = 1.0;
	}
	else if (grade2 == 'F') {
		numGrade2 = 0.0;
	}
	else {
		numGrade2 = 0.0;
	}

	if (grade3 == 'A') {
		numGrade3 = 4.0;
	}
	else if (grade3 == 'B') {
		numGrade3 = 3.0;
	}
	else if (grade3 == 'C') {
		numGrade3 = 2.0;
	}
	else if (grade3 == 'D') {
		numGrade3 = 1.0;
	}
	else if (grade3 == 'F') {
		numGrade3 = 0.0;
	}
	else {
		numGrade3 = 0.0;
	}

	var sum = ((numGrade1 * credit1) + (numGrade2 * credit2) + (numGrade3 * credit3));
	var totalCredits = (credit1 + credit2 + credit3);
	var gpa = sum / totalCredits;
	
	$("results").innerHTML = "";

	$("results").innerHTML += "<h2>GPA</h2>";
	$("results").innerHTML += "<p>Your GPA = " + gpa + "</p>"

};

var clearEntries = function () {
	$("grade1").value = ' ';
	$("grade2").value = ' ';
	$("grade3").value = ' ';

	$("credit1").value = ' ';
	$("credit2").value = ' ';
	$("credit3").value = ' ';
}

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("clear").onclick = clearEntries;
};

