function display(data) {
  console.log(data);
}

const futureData = fetch(API_URL);

futureData.then(display);
console.log("Me first!");

/*
  Program execution:
    First:
      display code is saved in memory with its identifier
    
    - saved future data identifier to memory and assing it undefined
      fetch doesn't create an execution context in the regular sense
      fetch inmediately returns an object with a property on it named value and it's undefined (will be filled in later)
      the object also has a hidden property on fulfillment: is an array of functions that will be triggered with value as an argument when value receives data
      futureData value would be the result of calling fetch with the API_URL, GET method by default

      fetch makes an XHR request (web browser feature), format: HTTP on completion -> put returned value from server to JavaScript object.
      We attach to the promise object functions that will be auto-triggered when the value is updated doing .then(function)

    .then(display) is like doing futureData.onFulfillment.append(display) and then futureData does display(futureData.value) when property value is updated
    when server responses web browser put the functions on the micro task queue 

    console.log("Me first!");
    event loop goes to micro task queue because callstack is empty and executes display(futureData.value)
*/
