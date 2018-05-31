'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordMatchValidator = function (_Validator) {
	_inherits(PasswordMatchValidator, _Validator);

	function PasswordMatchValidator(selector, matchee) {
		_classCallCheck(this, PasswordMatchValidator);

		var _this = _possibleConstructorReturn(this, (PasswordMatchValidator.__proto__ || Object.getPrototypeOf(PasswordMatchValidator)).call(this, selector));

		_this.$text = document.querySelector(matchee);
		_this.matchee = matchee;
		return _this;
	}

	_createClass(PasswordMatchValidator, [{
		key: 'validate',
		value: function validate() {

			_get(PasswordMatchValidator.prototype.__proto__ || Object.getPrototypeOf(PasswordMatchValidator.prototype), 'validate', this).call(this);
			console.log(this.$field.value + ' this is the field value');
			console.log(this.$text.value + ' this is the matchee value');

			if (this.$field.value === this.$text.value) {
				console.log('match');
			} else {
				this.errors.push('Must match Password');
				console.log('no match');
			}
		}
	}]);

	return PasswordMatchValidator;
}(Validator);
//# sourceMappingURL=PasswordMatchValidator.js.map
