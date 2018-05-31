
class PasswordValidator extends Validator {

	constructor(selector){
		super(selector);
	}

	validate() {
		super.validate();


		if (!this.$field.value.includes('@' || '?' || '!' || '$' || '%' || '#' || '&')) {
			this.errors.push(`Must include (!@#$%&)`);
		}

		if (this.$field.value.includes('^' || '.' || ',' || '~' || '*' || '(' || ')' || '{' || '}' || '[' || ']' || '+' || '=')) {
			this.errors.push(`Cannot include (^.,~*(){}[]+=)`);
		}

		if (!this.$field.value.includes(1|| 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) {
			this.errors.push(`Must include a number`)
		}

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

		
	}
}
	



	

