class RequiredCharValidator extends Validator {

	constructor(selector, requiredChar){
		super(selector);
		this.requiredChar = requiredChar;
	}

	validate(){
		super.validate();

		let foundARequiredChar = false;
		this.requiredChar.forEach((char) => {
			if (this.$field.value.includes(char)){
			foundARequiredChar = true;
			}
		});

		if(!foundARequiredChar) {
			this.errors.push('You must include one of these characters: ' + this.requiredChar);
		}
	}
}

		
	//     validate(){
	//         super.validate();
	
	//         const char = /^(?=.*[!@#$%^&*])/
	
	//         if (!this.$field.value.match(char)){
	//         this.errors.push(`Your Must include (!@#$%^&*)`)
	//         console.log('ugh')
	//         }
	//     }
	// }





// class PasswordValidator extends Validator {

// 	constructor(selector){
// 		super(selector, included, excluded);
// 	}

// 	validate() {
// 		super.validate();


		// var password = this.$field.value;
		// var includedChars= this.included;
		// var excludedChars= this.excluded;

		// function contains(target, pattern){
		// 	var value = 0;
		// 	pattern.forEach(function(word){
		// 		value = value + target.includes(word);
		// 	});
		// 	return (value === 1)
		// }

		// console.log(contains(this.selector, this.included));




		// if (!this.$field.value.includes('@' || '?' || '!' || '$' || '%' || '#' || '&')) {
		// 	this.errors.push(`Must include (!@#$%&)`);
		// }

		// if (this.$field.value.includes('^' || '.' || ',' || '~' || '*' || '(' || ')' || '{' || '}' || '[' || ']' || '+' || '=')) {
		// 	this.errors.push(`Cannot include (^.,~*(){}[]+=)`);
		// }

		// if (!this.$field.value.includes(1|| 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) {
		// 	this.errors.push(`Must include a number`)
		// }

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

		
	



	

