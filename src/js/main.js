

let validatorFirst = new Validator('[name=first-name]');
let validatorLast = new Validator('[name=last-name]');
let validatorEmail = new EmailValidator('[name=email]');
let validatorPassword = new PasswordValidator('[name=password]');
let validatorCapLowerPassword = new CapLowerValidator('[name=password]')
let validatorPasswordSpecial = new PasswordValidator('[name=password-match]', '[name=password]');
let validatorPasswordMatch = new PasswordMatchValidator('[name=password-match]', '[name=password]');
let validatorDay = new RangeValidator('[name=day]', 1, 31);
let validatorMonth = new RangeValidator('[name=month]', 1, 12);
let validatorYear = new RangeValidator('[name=year]', 1900, new Date().getFullYear() - 17);
//to make sure that they are at least 18 years of age





