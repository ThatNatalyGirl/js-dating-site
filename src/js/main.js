console.log('do you even,')
// class formValidator {

// 	constructor(parameters) {
		let emailInput = document.querySelector('#term');
		let input = document.querySelector('input');
		let popup = document.querySelector('.pop-up');		
		let homeButton = document.querySelector('#submit-home');
		let infoButton = document.querySelector('#info-home');

		document.body.addEventListener('keyup', function () {
			// check to see if the string includes . and @
			if (emailInput.value.includes('.') && emailInput.value.includes('@')) {
				// email.style.border = "5px solid green";
				emailInput.classList.remove('fail');
				emailInput.classList.add('pass');
				popup.style.color = 'transparent'
				console.log('sweet');
			} else {
				// email.style.border = "5px solid red"; 
				emailInput.classList.remove('pass');
				emailInput.classList.add('fail');
			}
		})

		homeButton.addEventListener('click', function(e){
				
			if (input.className === "pass"){
				
			} else if(input.className === "fail" || input.value === ''){
				e.preventDefault();
				console.log('staaaaaap');
			 	popup.style.color = '#8a1a15';
			}
		})

		infoButton.addEventListener('click', function(){
			//loop through each input field
			//if any are invalid - prevent default & give warning
			//else submit the form to a new page
			if (){

			}
		})










// 	}
// }
