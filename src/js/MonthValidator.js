
class MonthValidator extends Validator {
	constructor(selector){
		super(selector); 
	}

	validate() {
		super.validate();

		if (this.$field.value >= 13) {
			this.errors.push(`Must include an @`);
		}

		if (!this.$field.value.includes('.')) {
			this.errors.push(`Must include a '.'`);
		}
	}
}