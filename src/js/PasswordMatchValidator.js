
class PasswordMatchValidator extends PasswordValidator {

	constructor(selector){
		super(selector);
	}

	validate() {
			super.validate();
			
			if (matchingSelector.value === true && this.$field.value !== matchingSelector.value) {
				this.errors.push("Must match password");
			}
		}
	}
}
