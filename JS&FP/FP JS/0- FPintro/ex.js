/*
Exercise Pure functions:
A pure function has two characteristics:
  - No side effects: A pure function has no effect on the program or the world besides outputing its return value
  - Deterministic: Given the same input values, a pure function will always reutrn the same ouput

Decide wheter each of the following function is pure or impure.
*/

function getDate() {
  // impure because Date it's not passed as an input
  return new Date().toDateString();
}

function getWorkshopDate() {
  // it is pure because always returns the same value
  return new Date(2020, 11, 4).toDateString();
}

function toHex(n) {
  // it is pure because has no side effects and it's deterministic
  let hex = n.toString(16);
  return hex.padStart(2, '0');
}

function rgbToHex(R, G, B) {
  // same
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}

function setColor(R, G, B) {
  // is impure because we are affecting outside world
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById('color-me');
  colorMe.setAttribute('style', 'color: ' + hex);
}

async function readJsonFile(filename) {
  // impure because we don't receive the URL as an argument
  const file = wait fetch(
    'https://something.com/something/1'
  );
  return await file.json();
}

function writeJsonString(object) {
  // pure
  return JSON.stringify(object, null, 2);
}

function exlusiveOr(A, B) {
  // same
  return (A || B) && !(A && B);
}

function computeTruthTable(operator) {
  // pure
  const truthValues = [true, false];
  const table = [];

  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({A, B, value});
    }
  }
  return table
}

function showTruthTable(operator) {
  // impure we are logging information to the console
  console.table(computeTruthTable(operator));
}
