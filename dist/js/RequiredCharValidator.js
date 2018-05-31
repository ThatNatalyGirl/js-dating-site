'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequiredCharValidator = function (_Validator) {
	_inherits(RequiredCharValidator, _Validator);

	function RequiredCharValidator(selector, requiredChar) {
		_classCallCheck(this, RequiredCharValidator);

		var _this = _possibleConstructorReturn(this, (RequiredCharValidator.__proto__ || Object.getPrototypeOf(RequiredCharValidator)).call(this, selector));

		_this.requiredChar = requiredChar;
		return _this;
	}

	_createClass(RequiredCharValidator, [{
		key: 'validate',
		value: function validate() {
			var _this2 = this;

			_get(RequiredCharValidator.prototype.__proto__ || Object.getPrototypeOf(RequiredCharValidator.prototype), 'validate', this).call(this);

			var foundARequiredChar = false;
			this.requiredChar.forEach(function (char) {
				if (_this2.$field.value.includes(char)) {
					foundARequiredChar = true;
				}
			});

			if (!foundARequiredChar) {
				this.errors.push('You must include one of these characters: ' + this.requiredChar);
			}
		}
	}]);

	return RequiredCharValidator;
}(Validator);

//     validate(){
//         super.validate();

//         const char = /^(?=.*[!@#$%^&*])/

//         if (!this.$field.value.match(char)){
//         this.errors.push(`Your Must include (!@#$%^&*)`)
//         console.log('ugh')
//         }
//     }
// }


// class PasswordValidator extends Validator {

// 	constructor(selector){
// 		super(selector, included, excluded);
// 	}

// 	validate() {
// 		super.validate();


// var password = this.$field.value;
// var includedChars= this.included;
// var excludedChars= this.excluded;

// function contains(target, pattern){
// 	var value = 0;
// 	pattern.forEach(function(word){
// 		value = value + target.includes(word);
// 	});
// 	return (value === 1)
// }

// console.log(contains(this.selector, this.included));


// if (!this.$field.value.includes('@' || '?' || '!' || '$' || '%' || '#' || '&')) {
// 	this.errors.push(`Must include (!@#$%&)`);
// }

// if (this.$field.value.includes('^' || '.' || ',' || '~' || '*' || '(' || ')' || '{' || '}' || '[' || ']' || '+' || '=')) {
// 	this.errors.push(`Cannot include (^.,~*(){}[]+=)`);
// }

// if (!this.$field.value.includes(1|| 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) {
// 	this.errors.push(`Must include a number`)
// }

// if (!this.$field.value === (this.$field.toUpperCase())) {
// 	this.errors.push(`Must include an uppercase`)
// }

// if (!this.$field.value === (this.$field.toUpperCase())) {
// 	this.errors.push(`Must include an lowercase`)
// }
// function charLength() {
// 	if( this.$field.value.length >= 8 ) {
// 		return true;
// 	} else{
// 	 this.errors.push(`Must be at least 8 characters`)
// 	}
// }

// function lowercase() {
// 	var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

// 	if( regex.test(this.$field.value) ) {
// 		return true;
// 	} else{
// 	 this.errors.push(`Must include a lowercase letter`)
// 	}
// }

// function uppercase() {
// 	var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

// 	if( regex.test(this.$field.value) ) {
// 		return true;
// 	} else{
// 	 this.errors.push(`Must include a uppercase letter`)
// 	}
// }

// function special() {
// 	var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

// 	if( regex.test(this.$field.value) ) {
// 		return true;
// 	} else{
// 	 this.errors.push(`Must include a special character or number`)
// 	}
// }
//# sourceMappingURL=RequiredCharValidator.js.map
