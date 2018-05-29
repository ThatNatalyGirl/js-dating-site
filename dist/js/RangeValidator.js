"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeValidator = function (_Validator) {
	_inherits(RangeValidator, _Validator);

	function RangeValidator(selector, min, max) {
		_classCallCheck(this, RangeValidator);

		var _this = _possibleConstructorReturn(this, (RangeValidator.__proto__ || Object.getPrototypeOf(RangeValidator)).call(this, selector));

		_this.min = min;
		_this.max = max;
		return _this;
	}

	_createClass(RangeValidator, [{
		key: "validate",
		value: function validate() {
			_get(RangeValidator.prototype.__proto__ || Object.getPrototypeOf(RangeValidator.prototype), "validate", this).call(this);

			var numeric = parseFloat(this.$field.value);
			if (isNaN(numeric)) {
				this.errors.push("Must be a number");
			}
			if (numeric > this.max) {
				this.errors.push("Number cannot be greater than " + this.max);
			}
			if (numeric > this.min) {
				this.errors.push("Number cannot be less than " + this.min);
			}
		}
	}]);

	return RangeValidator;
}(Validator);
//# sourceMappingURL=RangeValidator.js.map
