'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordValidator = function (_Validator) {
	_inherits(PasswordValidator, _Validator);

	function PasswordValidator(selector) {
		_classCallCheck(this, PasswordValidator);

		return _possibleConstructorReturn(this, (PasswordValidator.__proto__ || Object.getPrototypeOf(PasswordValidator)).call(this, selector));
	}

	_createClass(PasswordValidator, [{
		key: 'validate',
		value: function validate() {
			_get(PasswordValidator.prototype.__proto__ || Object.getPrototypeOf(PasswordValidator.prototype), 'validate', this).call(this);

			if (!this.$field.value.includes('@' || '?' || '!' || '$' || '%' || '#' || '&')) {
				this.errors.push('Must include (!@#$%&)');
			}

			if (this.$field.value.includes('^' || '.' || ',' || '~' || '*' || '(' || ')' || '{' || '}' || '[' || ']' || '+' || '=')) {
				this.errors.push('Cannot include (^.,~*(){}[]+=)');
			}

			if (!this.$field.value.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) {
				this.errors.push('Must include a number');
			}

			if (!this.$field.value === this.$field.toUpperCase()) {
				this.errors.push('Must include an uppercase');
			}

			if (!this.$field.value === this.$field.toUpperCase()) {
				this.errors.push('Must include an lowercase');
			}
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

		}
	}]);

	return PasswordValidator;
}(Validator);
//# sourceMappingURL=PasswordValidator.js.map
