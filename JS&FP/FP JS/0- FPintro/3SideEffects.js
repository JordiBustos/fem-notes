/*
    - Do everything with functions
    - Program -> becomes a function(s)
      What should my program takes in and what should returns out

    - Avoid side effects do nothing but return output based on nothing but input

*/

// IMPERATIVE

let name = 'Alonzo';
let greeting = 'Hi';

console.log(`${greeting}, ${name}`);

greeting = 'Howdy';
console.log(`${greeting}, ${name}`);


// FUNCTIONAL

function greet(greeting, name) {
  return `${greeting}, ${name}`
}

greet('Hi', 'Alonzo');
greet('Howdy', 'Alan');

// CODE THAT HAVE SIDE EFFECTS

let thesis = {name: "Church's", date:1936};

function renameThesis(newName) {
  thesis.name = newName;
  console.log('Renamed');
}

renameThesis("Church-Turing");
thesis;

// CODE THAT DOESN'T HAVE SIDE EFFECTS

const thesisTwo = {name: "Church's", date: 1936};

// pure function can only look at its arguments to get information
function renameThesisTwo(oldThesis, newName) {
  return {
    name: newName, date: oldThesis.date
  }
}
// Don't change in place, create a copy and mutate the information
// the old one remains the same
const newThesis = renameThesisTwo(thesis, 'Church-Turing');
