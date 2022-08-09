// untenable but intuitive

function display(data) {
  console.log(data);
}

const dataFromAPI = fetchAndWait('https://twitter.com/somebody/1');

//... user can do nothing here
//... untill fetchAndWait is finished

display(dataFromAPI);
console.log('Me later');

/*
  Problems:
    Cannot continue running JS code line by line untill fetchAndWait is finished
    So the execution of the global context is blocked
*/
