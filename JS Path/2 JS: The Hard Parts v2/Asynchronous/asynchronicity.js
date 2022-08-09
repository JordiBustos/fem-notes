/*
  JavaScript is single threaded (one command runs at a time)
  Synchronously executed (each line is run in order the code appears)

  So what if we have a task:
    Accessing twitter's server to get new tweets that takes a long time
    Also we want some code to run using those tweets

    The page would be freezed untill we get the server response
    Slows functions block code from running
*/

// First example

function printHello(){
  console.log('hello')
}

setTimeout(printHello, 0) // the job of javascript it's just to set the timer in the web browser and then de call stack pops out
console.log('Me first')

// 'Me first'
// hello

/*
  Our core JavaScript engine has 3 main parts
  -Thread of execution
  -Memory environment
  -Call stack

  -> Other components
     - Web Browser APIs/Node background APIs
     - Promises
     - Event loop, callback/task queue and micro task queue


  Web browser -> JS engine + (HTML DOM -> document, timer -> setTimeout, dev tools, console -> console, sockets, network request -> fetch)
*/

// Second example

function printSomething(){ console.log('something') }
function blockFor1sec(){ //some task that takes 1 sec }

setTimeout(printSomething, 0) // set timer at web browser and saves a reference to printSomething in memory

blockFor1sec()
console.log('Me first')

/*
  Exists a callback queue after 0ms printSomething goes to callback queu
  then executes on the call stack blockFor1sec for 1 sec and then pops out of the call stack
  then runs the console.log('me first') and finally when callstack it's empty the callback queue pop out printSomething and run it
  global execution context is prioritized respect to callback queue
  we know the order but not the time

  Event Loop ->
    Check if call stack is not empty, if there's still further global code to run, then the event loop will not even go look at the queue
    if call stack is empty the event loop the next callback queue item and move it to call stack


  setTimeout means that after n ms the function is passed to callback queue
*/

// This is all of ES5
