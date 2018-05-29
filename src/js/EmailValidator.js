//email validator takes everything from validator and can add to it. It can access it and it knows about it but not vice versa

class EmailValidator extends Validator {
	//We don't need to call it in this case bc it's not changing but just so we can see....
	constructor(selector){
		super(selector); //call the constructor from Validator() - super is saying I want all the stuff in your constructor here and be able to use it. If we don't use it then the constructor we use here is just getting redefined so it's all new stuff. You can call it wherever you need in the function
	// 	console.log(`constructor from EmailValidator`)
	}

	validate() {
		//to make it's own version
		super.validate();
		//here is where the time out is necessary. The HACK puts a delay so that we can actually get errors from the code below before outputting

		if (!this.$field.value.includes('@')) {
			this.errors.push(`Must include an @`);
		}

		if (!this.$field.value.includes('.')) {
			this.errors.push(`Must include a '.'`);
		}
	}
}