console.log('do you even,')
// class formValidator {

// 	constructor(parameters) {
		let firstNameInput = document.querySelector('#first-name');
		let lastNameInput = document.querySelector('#last-name');
		let emailInput = document.querySelector('#email');
		let passwordInput = document.querySelector('#password');
		let passwordMatchInput = document.querySelector('#password-match');
		let answer = document.querySelector('input');
		let inputs = document.querySelectorAll('input');
		let popup = document.querySelector('.pop-up');
		let popups = document.querySelectorAll('.pop-up');		
		let button = document.querySelector('a');
		let asterick = document.querySelectorAll('label div')


		function showError(inputItem, param1, param2) {
			inputItem.addEventListener('blur', function () {
				// check to see if the string includes . and @
				if (inputItem.value.includes('.') && inputItem.value.includes('@')) {
					inputItem.classList.remove('fail');
					inputItem.classList.add('pass');
					popup.classList.remove('appear');
					console.log('sweet');
				} else {
					inputItem.classList.remove('pass');
					inputItem.classList.add('fail');
				}
			})	
		}

		showError()



		button.addEventListener('click', function(e){	
			inputs.forEach(function(input){ 
				if (input.className === "pass"){
					
				} else if(input.className !== "pass" || input.value === ''){
					e.preventDefault();
					console.log('staaaaaap');
				 	popups.forEach(function(popup){
				 		popup.classList.add('appear');
				 	})	
				}
			})
		})

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



// inputs.addEventListener("blur", function(event) {
//   event.target.style.background = "blue";    
// }, true);

// popups.forEach(function(popup){
// 	if inputs.className === 'pass'{
// 		popup.classList.remove('appear');
// 	}
// })




// 	}
// }
