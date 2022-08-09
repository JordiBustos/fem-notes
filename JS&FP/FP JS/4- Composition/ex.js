/*
Pipelining
Complete the pipeline function below.
This function takes as arguments any number of single-argument
functions and should return a single function
representing their composition, i.e. a function that
passes the input value through a "pipeline" of the functions.
 */

function pipeline(...functions) {
  if (functions.length == 0) return input => input;
  if (functions.length == 1) return input => functions[0](input)

  return function(input) {
    return pipeline(...functions.slice(1))(functions[0])(input);
  };
}

// with reduce
function reducePipeline(...functions) {
  return input => functions.reduce((acc, fn) => fn(acc), input)
}
