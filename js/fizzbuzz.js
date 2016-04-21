$(function (){

	var userSuggested = 0;
	userSuggested += prompt("Hi there!  Pick a Number");
	// userSuggested is a String at this point

	var userNumber = stringToNumber(userSuggested);  //call stringToNumber passing userSuggested and assign its rteturn value to userNumber


	if(userNumber) {
		fizzbuzz(userNumber); // Call Fizzbuzz function passing along userNumber. 
	} else {
		alert("You did not enter a number");
	}

});

function stringToNumber(val) {
	if (Number(parseInt(val))==val) {
		return parseInt(val); // Return the number value of val
	} else {
		return false; // Not a number
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



