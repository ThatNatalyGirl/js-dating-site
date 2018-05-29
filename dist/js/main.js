'use strict';

var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');
var validatorEmail = new EmailValidator('[name=email]');
var validatorPassword = new PasswordValidator('[name=password]');
var validatorPasswordMatch = new PasswordMatchValidator('[name=password-match]');
var validatorDay = new RangeValidator('[name=day]', 1, 31);
var validatorMonth = new RangeValidator('[name=month]', 1, 12);
var validatorYear = new RangeValidator('[name=year]', 1900, new Date().getFullYear() - 17);
//to make sure that they are at least 18 years of age


// let validatorDay = new DayValidator('[name=day]');
// let validatorMonth = new MonthValidator('[name=month]');
// let validatorYear = new YearValidator('[name=year]');
//# sourceMappingURL=main.js.map
