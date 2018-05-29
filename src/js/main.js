

let validatorFirst = new Validator('[name=first-name]');
let validatorLast = new Validator('[name=last-name]');
let validatorEmail = new EmailValidator('[name=email]');
let validatorPassword = new PasswordValidator('[name=password]');
let validatorPasswordMatch = new PasswordMatchValidator('[name=password-match]');
let validatorDay = new RangeValidator('[name=day]', 1, 31);
let validatorMonth = new RangeValidator('[name=month]', 1, 12);
let validatorYear = new RangeValidator('[name=year]', 1900, new Date().getFullYear());
// let validatorDay = new DayValidator('[name=day]');
// let validatorMonth = new MonthValidator('[name=month]');
// let validatorYear = new YearValidator('[name=year]');

