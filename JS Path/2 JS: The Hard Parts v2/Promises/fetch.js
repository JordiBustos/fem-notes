function display(data){ console.log(data) }
function printHello(){ console.log('hello') }
function blockFor300ms(){ /*blocks js thread for 300ms */}

setTimeout(printHello, 0)

const futureData = fetch('example.com')
futureData.then(display)

blockFor300ms()
console.log('me first')

// 'me first'
// data
// 'hello'

/*
Asynchronous code: doing code out of order from when it was said to be done
While the callback queue (task queue) has the printHello from setTimeout
the microtask queue has the display from then function and it's prioritized respect to callback queue
the event loop moves the items of microtrask to call stack first and then moves the items from callback queue
*/

/*
  Event loop goes from global (callstack) (checks afterr every statement if it's empty)
  when that's finished goes to microtask queue
  and then to task queue
*/

/*
  The object promise has another hidden property besides onFullfilled
  It's onRejection it was created to handle errors

  If any errors occurs functions inside onFullfilled are not executed
  futureData.catch(functionExecutedIfAnyErrorOccurs) or pass it as the second argument of then
*/
