$(function (){

	var userSuggested = 0;
	userSuggested += prompt("Hi there!  Pick a Number");

	var userNumber = stringToNumber(userSuggested);

	if(userNumber) {
		fizzbuzz(userNumber);
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


	function stringToNumber () {
		var finalNumber = parseInt(userSuggested);
	};


	// var notString;

	// 	if (userNumber != null) {
	// 		var notString = parseInt(userNumber)
	// 	};


	function fizzbuzz (finalNumber) {
		for (var number = 1; number < 100; number++) {
			if (number%5 == 0 && number%3 == 0) {
				document.write('fizz buzz' + '<br>');
			}
			else if (number%3 == 0) {
				document.write('fizz' + '<br>');
			}
			else if (number%5 == 0) {
				document.write('buzz' + '<br>');
			}
			else {
			document.write(number + '<br>');
			}
		}
};
});


//  -- New Assignment --//
 // 0- Commit Frequently

// 1- When page loads, user should be prompted to supply a number.
//    Do this with a prompt() function, but also maybe a simple text input with text telling user to input a nubmer.

// 2- Write one named function that takes integer as argument, and then coutns from 1 to argument value, substituting "fizz", "buzz" and "fizzbuzz"

// 3- Convert value user inputs from string to a number.  Value you get form prompt() or val() on form will be string by default.
//    To convert into integer ... use the + operator.  "22" into number with +"22".

// 4- Validate user input to ensure the user is submitting a number.  Use parseInt() function to convert string into integer.  
 //   Ex- parseInt('597a') will return 597  and parseInt('hello') will return NaN.

 // 5- Optional: write code to ensure user has not supplied decimal value. (look at StackOverflow link on page)

 //  6- Don't design app.



