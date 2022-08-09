// padStart takes two arguments
// first one required (how many characters -> what final length we want), second one is optional

var str = 'Hello';

str.padStart(5);      // Hello
str.padStart(8);      // '   Hello'
str.padStart(8, '*'); // '***Hello'

str.padStart(8, '12345'); // '123Hello'
str.padStart(8, 'ab');    // 'abaHello'

// padEnd works exactly the same

str.padEnd(8, 'ab'); // 'Helloaba'
str.padEnd(8, '*')   // 'Hello***'
str.padEnd(8)        // 'Hello   '

// -------------------------------

// trim
var str = '   some stuff \t\t';
str.trim(); // 'some stuff'

str.trimStart(); // 'some stuff      '
str.trimEnd();   // '   some stuff'
