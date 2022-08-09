async function fetchFiles(files) {
  var promises = files.map( getFile );

  // this fails -> cannot use await inside forEach because
  // await needs to be used inside a async function and each
  // is a regular function
  promises.forEach(function each(promise) {
    console.log(await promise);
  });
}

// Asynchronous iterator that can pause every time it sees a promise and wait untill is finished
// and if it see a values acts like forEach. This doesn't exists as built-in function

// github.com/getify/fasy
