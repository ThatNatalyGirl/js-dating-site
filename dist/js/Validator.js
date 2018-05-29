'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
	function Validator(selector) {
		_classCallCheck(this, Validator);

		//find the field, show an error if it's not available - the $field is defined here by naming the selector that we're calling so we're going to be able to use the Validator big function that we're making and then call it elsewhere like in main.js and give it a selector to use that we are working to validate. We then refer to the function we are in and name it, but saying the item we queried from html is going to be named this.$field. 
		this.$field = document.querySelector(selector);
		if (!this.$field) {
			console.warn('Couldn\'t find an element with selector', selector);
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
		//So here below it's trying to redefine 'this' but by binding it, it is keeping the original this from there on. 
		this.$field.addEventListener('keyup', this.validate.bind(this));
		this.$field.addEventListener('blur', this.validate.bind(this));
	}

	_createClass(Validator, [{
		key: 'validate',
		value: function validate() {
			console.log('Rawr');

			this.errors = [];

			if (!this.$field.value) {
				this.errors.push('*Required');
			}

			//by putting it in a timeout it's going to go the end of the callstack and gives all the other js's a chance to run
			//this is a HACK!!!!!! :O
			setTimeout(this.showErrors.bind(this), 0);
		}
	}, {
		key: 'showErrors',
		value: function showErrors() {
			var _this = this;

			this.$errorContainer.innerHTML = "";
			if (this.errors.length) {
				this.$field.style.borderColor = '#d02f28';

				this.errors.forEach(function (error) {
					_this.$errorContainer.innerHTML += '<p>' + error + '</p>';
				});

				// for (let i = 0: i < this.errors.length; i++) {
				// 	this.$errorContainer.innerHTML += this.errors[i]
				// }
				// this.$errorContainer.innerHTML = this.errors;
			} else {
				this.$field.style.borderColor = '#18a77d';
			}
		}
	}]);

	return Validator;
}();

// other Way to do it
// var Validator = function () {
// 	let shared = {};
// }
//# sourceMappingURL=Validator.js.map
