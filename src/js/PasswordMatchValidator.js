
class PasswordMatchValidator extends Validator {

	constructor(selector){
		super(selector); 
	}

	validate() {
		super.validate();

		if (!this.$field.value === ){
			this.errors.push(`Must match Password`);
		}
	}
}