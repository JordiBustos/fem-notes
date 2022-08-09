/*
  Template Strings (Interpolated Literals).
*/

var name = 'John Doe';
var email = 'example@gmail.com';
var title = 'Teacher';

// Old way
var msg = 'Welcome to this class! Your \n' + title + ' is ' + name + ', contact: ' + email + '.';

// With template strings
var msgTS = `Welcome to this class! Your
${title} is ${name}, contact: ${email}.`;

// Tagged Tempaltes

function formatCurrency(strings, ...values) {
  var str = '';
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i-1] == 'number') {
        str += `$${values[i-1].toFixed(2)}`;
      }
      else {
        str += values[i-1]
      }
    }
    str += strings[i]
  }
  return str
}

var amount = 12.3;
var msgTT =
    formatCurrency
    `The total for your order is ${amount}`;

// It's a special kind of function call, called a tagged template string
// calls the function formatCurrency
