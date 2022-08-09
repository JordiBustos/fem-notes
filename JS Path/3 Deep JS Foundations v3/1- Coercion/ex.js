// TODO: write the validation functions
function isValidName(name){
  return (typeof name === 'string' && name.trim().length >= 3)
}


function hoursAttended(attended, length){
  const checker = (str) => {
    return (typeof str == 'string' && str.trim() != '')
  }

  if (checker(attended)) attended = Number(attended)

  if (checker(length)) length = Number(length)

  if (
    typeof length == 'number' && typeof attended == 'number' &&
    attended <= length && length >= 0 && attended >= 0 &&
    Number.isInteger(length) && Number.isInteger(attended)
  ) return true
  return false
}
// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);


/*
  Extra Number.isInteger() implementation
*/

function isInteger(n){
  return (n - Math.floor(n) == 0)
}

console.log(isInteger(5))
console.log(isInteger(5.2))
console.log(isInteger(5.99))
