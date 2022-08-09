/*
  Missconception:
    Closing over values -> False
    Closing over variables -> we check the value that some variable has at that moment, not what it had before.
                              Preserves access to variables
*/

var teacher = 'Kyle';

// at the moment that myTeacher is created teacher has the value 'Kyle'
var myTeacher = function() {
  // this hold a link to the variable teacher (not to the value 'Kyle')
  console.log(teacher);
};

// but then get changed to 'Suzy'
teacher = 'Suzy';

myTeacher(); // ? -> Suzy

//******************************

for (var i = 1; i <= 3; i++){
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000)
}

// i: 4
// i: 4
// i: 4

// Solution

for (var i = 1; i <= 3; i++) {
  // creates a brand new j in every iteration and closes over the variable with the value that has in that moment
  let j = i;
  setTimeout(function() {
    console.log(`j: ${j}`);
  }, j * 1000);
}

// j: 1
// j: 2
// j: 3

// ************* The same but with "automatic" closure ***************

// if we use let JS declarates a new i for each iteration
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`)
  }, i * 1000)
}

/*
  Closure is a preservation of the linkage to a variable, not the capturing of a variable
*/
