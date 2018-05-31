
class PasswordMatchValidator extends Validator {

	constructor(selector, matchee){
		super(selector);
		this.$text = document.querySelector(matchee);
		this.matchee = matchee; 
	}

	validate() {

		super.validate();
		console.log(this.$field.value + ' this is the field value');
		console.log(this.$text.value + ' this is the matchee value');

		if (this.$field.value === this.$text.value){
			console.log('match')
		}else {
			this.errors.push(`Must match Password`);
			console.log('no match')
		}
	}
}