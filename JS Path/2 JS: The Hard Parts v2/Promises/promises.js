/*
  Created to keeping track of the background features of the web browser
  setTimeout, document, etc adn be able to tracking them back to JavaScript

  Creates something in the JavaScript memory that allow us to keep track of the data and state of the feature
  Fetch send a network request, speaks to the internet, asking for some data and simultaneously it's going to also in JavaScript, return an object
  called promise object, that is going to sit in memory and when the background is done, the object's data is updated with the data requested
*/

function display(data) { // declaring a function and storing it in global memory
  console.log(data)
}

// declaring const future data
                   // return a promise object in JavaScript
                   // { value: undefined, unfulfilled:[ ] } unfulfilled is a hidden property
                   // then goes to web browser and makes the http request (GET default)
const futureData = fetch('https://twitter.com/something') // the object response is put it on the property value of futureData

// in the array onFullfilled we put the function that we want to have automatically
// run when the value property get filled in and the data would be automatically inserted as the input of any function in the array
futureData.then(display) // futureData.unfullfilled.push(display) -> onFullfilled is a hidden property so we can't do this

/*
  with then function we put display on the array and when the data it's obtained onFullfilled runs
  display with the data automatically
*/

console.log('Me first')
