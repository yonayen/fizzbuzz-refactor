$(document).ready(function() {
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
});


 // -- Assignment --//

// Count from 1-100; just say number if it's not divisible by 3 or 5.  
// If divisible by 3 --> 'fizz'
// If divisible by 5 --> 'buzz'
// If dibisible by both 3 & 5 --> 'fizzbuzz'
// 1, 2, fizz, 4, buzz, fizz, 7,8,fizz, buzz, 11, fizz, 13, 14, fizz buzz

 // ------- //

