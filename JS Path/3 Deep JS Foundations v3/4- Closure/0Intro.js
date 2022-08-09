// https://www.kimsereylam.com/racket/2019/02/06/lambda-calculus-and-closure.html#:~:text=A%20closure%20is%20a%20record,bindings%20for%20all%20its%20variables.

/*
  A closure consist of an lambda term (by itself it's not a function) plus an environment dictating
  or saving the value of the surrounding variables.
  When the execution context of a function is created we can take the COVE (closed over variable environment) of that function
  and use the inside function (lambda term) with the saved values (in the COVE).

  (lambda (x) z), z is not fixed
  if z it's 10 then returns 10 this is not a function it's a open lambda term

  (lamba (x) z) + [z = 10] = f
  or
  (define (f x) 10) -> this is a function

  A closure is an open lambda term paired with an environment that gives values to the free variables
*/

/* FrontEndMaster part ->

  What's closure? Interview question answer:
  Closure is when a function is able to remember and access the variables outisde of itself (free variables), that means that can access its lexical scope.
  Even when that function is executed in a different scope.

  Both are necessary to create closure.
  Closure is scope based operation (not variable) it takes everything in the scope in its COVE
*/

function ask (question) {
  setTimeout (function waitASec () {
    // waitASec has access to question even if ask function it's finished
    // closure closed over the variable question so we can access it
    console.log(question)
  }, 100)
}

ask("What's closure?")

// ***************************

function otherAsk(question) {
  return function holdYourQuestion() {
    console.log(question)
  }
}

var myQuestion = otherAsk('Closure')

myQuestion() // closue
