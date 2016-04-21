$(function (){

	var userSuggested = 0;
	userSuggested += prompt("Hi there!  Pick a Number");

	var userNumber = stringToNumber(userSuggested);

	if(userNumber) {
		fizzbuzz(userNumber); // Allows line #25 to run 
	} else {
		alert("You did not enter a number");
	}

});

function stringToNumber(val) {
	if (Number(parseInt(val))==val) {
		return parseInt(val);
	} else {
		return false;
	}
};


function fizzbuzz(fizzbuzzLimit) {
	for (var number = 1; number < fizzbuzzLimit; number++) {
		if (number%5 ==0 && number%3 ==0) {
			document.write('fizz buzz' + '<br>');
		}
		else if (number%3 ==0) {
			document.write('fizz' + '<br>');
		}
		else if (number%5 ==0) {
			document.write('buzz' + '<br>');
		}
		else {
			document.write(number + '<br>');
		}
	}
};



 // 5- Optional: write code to ensure user has not supplied decimal value. (look at StackOverflow link on page)

 //  6- Don't design app.



