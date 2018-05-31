class UpperLowerValidator extends Validator {
	

	validate(){
		super.validate();


		var lowerRegex = /[a-z]/;
		var upperRegex = /[A-Z]/;

		if (!this.$field.value.match(lowerRegex)){
			this.errors.push(`Must have a lowercase letter`)
		}

		if (!this.$field.value.match(upperRegex)){
			this.errors.push(`Must have a capital letter`)
		}


		// var letterRegex = /^(?=.*[a-z])(?=.*[A-Z])/;

		// if (!this.$field.value.match(letterRegex)){
		// 	console.log(!this.$field.value)
		// 	this.errors.push(`Must have a capital and lowercase letter`)
		// }
	}
}