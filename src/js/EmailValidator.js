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

		//this is a regex expression. You can google search to get one and apply it to a variable and then use it. https://regexr.com/ helps and http://emailregex.com/ is where we got this one from. There are lots of regex testers out there to apply on your websites. Just know that it exists and how to use it. Here is should work.
		var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if(!this.$field.value.match(emailRegex)) {
			this.errors.push(`Your email address is not valid`);
		}



		// if (!this.$field.value.includes('@')) {
		// 	this.errors.push(`Must include an @`);
		// }

		// if (!this.$field.value.includes('.')) {
		// 	this.errors.push(`Must include a '.'`);
		// }
	}
}