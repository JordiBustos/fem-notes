function display(data)   { console.log(data); }
function printHello()    { console.log("Hello"); }
function blockFor300ms() { /* block js thread for 300ms  */ }

setTimeout(printHello, 0);

const futureData = fetch('example.com/1');
futureData.then(display);

blockFor300ms();

console.log("Me first");

/*
    Declared three functions in memory

    setTimeout calls web browser feature timer with -> printHello and time in ms
    push printHello to the callback queue (task queue)

    const futureData is declared in memory
    same as previous example

    blockFor300ms() stays on the call stack for 300ms
    we receive the response of the server and display(futureData.value) is push it to micro task queue 

    console.log("Me First")

    console.log(data)

    console.log("Hello")

*/

/*
Status property of the Promise has three possibles values
Status: rejected: Error in background work, doesn't trigger onFulfillment, trigger onRejection functions futureData.catch(displayError)
        projected
        pending there's nothing stored on property value yet
*/

/*
If a task on the micro task push a new task to micro task may generate an infinite loop with the event loop and blocks the task queue 

Problems: Most developers doens't know how it's working under the hood
            Debugging becomes super hard

benefits:
    Cleaner readable style with pseudo synchronous style code
    Nice error handling process
*/

