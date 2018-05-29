
class YearValidator extends Validator {
	constructor(selector){
		super(selector); 
	}

	validate() {
		super.validate();

		if (!this.$field.value < 2000 || !this.$field.value > 1900) {
			this.errors.push(`Must Be 18 Years of Age to participate`);
		}
		
	}
}