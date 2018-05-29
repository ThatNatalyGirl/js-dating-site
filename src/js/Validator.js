
class Validator{
	constructor(selector) {

		//find the field, show an error if it's not available - the $field is defined here by naming the selector that we're calling so we're going to be able to use the Validator big function that we're making and then call it elsewhere like in main.js and give it a selector to use that we are working to validate. We then refer to the function we are in an name it but saying the item we queried from html is going to be named this.$field. 
		this.$field = document.querySelector(selector);
		if (!this.$field) {
			console.warn(`Couldn't find an element with selector`, selector)
			return false;
		}

		//make an element to show errors in
		this.$errorContainer = document.createElement('div');
		this.$errorContainer.classList.add('error-message');
		this.$field.parentElement.appendChild(this.$errorContainer);
		
		//keep track of errors
		this.errors = [];
		
		//when the user does keyup call a modified version of validate that has the a class as 'this' . If you bind it. it is saying that the this from before is being translated after this
		//add event listener to call this.validate, but overrule its 'this' logic, and force its 'this' to be the Validate class instance
		//So here below it's trying to redefine this but by binding it it is keeping the original this from there on. 
		this.$field.addEventListener(`keyup`, this.validate.bind(this))
		this.$field.addEventListener(`blur`, this.validate.bind(this))
	}

	validate() {
		console.log(`Rawr`);

		this.errors = [];

		if (!this.$field.value) {
			this.errors.push(`Fill out the field Dummy!`);
		}

		//by putting it in a timeout it's going to go the end of the callstack and gives all the other js's a chance to run
		//this is a HACK! :O
		setTimeout(this.showErrors.bind(this), 0);
	}

	showErrors() {
		if (this.errors.length) {
			this.$field.style.borderColor = `#8a1a15`;
			this.$errorContainer.innerHTML = "";
			this.errors.forEach((error) => {
				this.$errorContainer.innerHTML += `<p>`+ error +`</p>`;
			})

			// for (let i = 0: i < this.errors.length; i++) {
			// 	this.$errorContainer.innerHTML += this.errors[i]
			// }
			// this.$errorContainer.innerHTML = this.errors;
		} else {
			this.$field.style.borderColor = `#18a78e`;
			this.$errorContainer.innerHTML = "";
		}
	}
}

// other Way to do it
// var Validator = function () {
// 	let shared = {};
// }