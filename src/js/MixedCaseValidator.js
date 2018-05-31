class UpperLowerValidator extends Validator {
    validate(){
        super.validate();

        const letters = /^(?=.*[a-z])(?=.*[A-Z])/;

        if (!this.$field.value.match(letters)){
        	console.log(!this.$field.value)
            this.errors.push(`Must have a capital and lowercase letter`)
        }
    }
}