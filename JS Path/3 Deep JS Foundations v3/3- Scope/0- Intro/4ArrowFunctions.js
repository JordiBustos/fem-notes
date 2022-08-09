var ids = people.map(person => person.id)

                              // Name is better for readers of the code
var ids = people.map(function getPersonId(person){
  return person.id
})

// Equivalents
/*
  Don't use arrow functions only because the syntax use it just for "lexical this".
  Function declaration is more readeable
*/

// ***********************

getPerson()
.then(person => getData(person.id))
.then(renderData)

getPerson()
.then(function getDataFrom(person){
  return getData(person.id)
})
.then(renderData)




/*
  Named Function Declaration
            >
  Named Function Expression
            >
  Anonymous Function Expression
*/
