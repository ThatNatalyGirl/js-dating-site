'use strict';

console.log('do you even,');
// class formValidator {

// 	constructor(parameters) {
var emailInput = document.querySelector('#email');
var input = document.querySelector('input');
var popup = document.querySelector('.pop-up');
var button = document.querySelector('a');
var asterick = document.querySelectorAll('label div');

function emailVerification() {
	// check to see if the string includes . and @
	if (emailInput.value.includes('.') && emailInput.value.includes('@')) {
		emailInput.classList.remove('fail');
		emailInput.classList.add('pass');
		popup.classList.remove('appear');
		console.log('sweet');
	} else {
		emailInput.classList.remove('pass');
		emailInput.classList.add('fail');
	}
}

document.body.addEventListener('keyup', function () {
	emailVerification();
});

button.addEventListener('click', function (e) {
	//loop through all the inputs
	if (input.className === "pass") {} else if (input.className === "fail" || input.value === '') {
		e.preventDefault();
		console.log('staaaaaap');
		popup.classList.add('appear');
	}
});

// infoButton.addEventListener('click', function(e){
//loop through each input field
//if any are invalid - prevent default & give warning
//else submit the form to a new page
// e.preventDefault();
// console.log(input.length)
// for (var i = 0; i < input.length; i++) {
// 		input[i]
// 	}

// if (){

// } else if(){
// 	asterick.style.display = 'block';
// }
// })


// 	}
// }
//# sourceMappingURL=main.js.map
