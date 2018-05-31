class RangeValidator extends Validator {

	constructor(selector, min, max){
		super(selector); 
		this.min = min //take arguments from constructor above and put them into properties of the class
		this.max = max
	}

	validate() {
		super.validate();

		let numeric = parseFloat(this.$field.value)
		if (isNaN(numeric)) {
			this.errors.push(`Must be a number`);
		}
		if (numeric > this.max) {
			this.errors.push(`Number cannot be greater than ` + this.max);
		}	
		if (numeric < this.min) {
			this.errors.push(`Number cannot be less than ${this.min}`);
			//you can use either manner to add the variable into your string
		}	
	}
}