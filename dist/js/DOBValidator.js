'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//email validator takes everything from validator and can add to it. It can access it and it knows about it but not vice versa

var MonthValidator = function (_Validator) {
	_inherits(MonthValidator, _Validator);

	//We don't need to call it in this case bc it's not changing but just so we can see....
	function MonthValidator(selector) {
		_classCallCheck(this, MonthValidator);

		return _possibleConstructorReturn(this, (MonthValidator.__proto__ || Object.getPrototypeOf(MonthValidator)).call(this, selector)); //call the constructor from Validator() - super is saying I want all the stuff in your constructor here and be able to use it. If we don't use it then the constructor we use here is just getting redefined so it's all new stuff. You can call it wherever you need in the function
		// 	console.log(`constructor from EmailValidator`)
	}

	_createClass(MonthValidator, [{
		key: 'validate',
		value: function validate() {
			_get(MonthValidator.prototype.__proto__ || Object.getPrototypeOf(MonthValidator.prototype), 'validate', this).call(this);

			if (!this.$field.value.includes('@')) {
				this.errors.push('Must include an @');
			}

			if (!this.$field.value.includes('.')) {
				this.errors.push('Must include a \'.\'');
			}
		}
	}]);

	return MonthValidator;
}(Validator);
//# sourceMappingURL=DOBValidator.js.map
