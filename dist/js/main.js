'use strict';

// class formValidator {

// 	constructor(parameters) {
var email = document.querySelector('#term');

document.body.addEventListener('keyup', function () {
	// check to see if the string includes . and @
	if (email.value.includes('.') && email.value.includes('@')) {
		// email.style.border = "5px solid green";
		emailInput.classList.remove('fail');
		emailInput.classList.add('pass');
	} else {
		// email.style.border = "5px solid red"; 
		emailInput.classList.remove('pass');
		emailInput.classList.add('fail');
	}
});
// 	}
// }
//# sourceMappingURL=main.js.map
