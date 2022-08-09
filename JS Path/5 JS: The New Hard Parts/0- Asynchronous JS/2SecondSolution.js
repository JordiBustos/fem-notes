/*
  Web Browser APIs/Node background threads
  Document, console, setTimeout, localStorage, fetch.
  Not JS features but Web Browser API
*/

function printHello() {
  console.log('Hello');
}

// Web Browser feature -> Timer with the function and duration
setTimeout(printHello, 0);
console.log('Me first');

// Me first
// Hello


/*
  In the web browser the timer counts and on completion
  moves printHello to callback queu (task queue) and when global code (and call stack's empty) it's finished
  event loop moves it to call stack

  If we put one million console.log('Me first')
  printHello would be executed after them
*/
