/*
  OOP ->
    Popular paradigm for structuring complex code
    Prototype Chain -> the feature behind-the-scenes that enables emulation of OOP but is a compelling tool in itself
    __proto__ != prototype

    new and class keywords

    Encapsulate functionallity to have all what i need into an organized data structure
    using specific function that are only available on some specific object
*/

const user1 = {
  name:'Will',
  score: 3,
  // encapsulates functionallity
  increment: function(){user1.score++}
}

user1.increment() // user1.score -> 4

// Second way of create an object

const user2 = {}

     // Dot notation
user2.name = 'Tim'; user2.score = 6; user2.increment = function(){ user2.score++ }


// Using Object.create()
const user3 = Object.create(null)

user3.name = 'Eva'; user2.score = 1; user2.increment = function(){ user3.score++ }

// DRY Principle broken (don't repeat yourself)

// SOLUTION 1 -> Create and return objects using a function

function userCreator(name, score){
  const newUser = {}

  newUser.name = name
  newUser.score = score
  newUser.increment = function(){
    newUser.score++
  }

  return newUser
}

const user4 = userCreator('Ethan', 3)
const user5 = userCreator('John', 5)


// Even if this looks like a good solution
// we are storing in memory the same function increment every time we create an user

// SOLUTION 2 -> Using prototype chain
/*
  Store the increment function in just one object and have the interpreter,
  if it doesn't find the function inside user1, look up to that object to check if it's there

  Link user1 and functionStore so the interpreter, on not finding .increment (on user1), makes sure to check up in functionStore where it would
  find it

  Make the link with Object.create() technique
*/

function userCreator2 (name, score){
                  // We assigned the __proto__ hidden property that has a link to userFunctionStore
  const newUser = Object.create(userFunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}

const userFunctionStore = {
  //                    implicit parameter, it's automatically there and filled in
  //                    Creates the variable 'this' in local memory (is the object of the left hand side)
  increment: function() { this.score++ }
  login: function() { console.log('logged in') }
}

const user6 = userCreator2('Will', 3)
const user7 = userCreator2('Tim', 5)

user6.hasOwnProperty('score') // first checks in global memory to user1 -> then looks up to the property on user1 -> then goes to Object.property

/*
  All objects in JavaScript have a default proto property that's linked (as __proto__) to Object.prototype
  Object.property.hasOwnProperty
  Object.property.__proto__ : null 'cause it's the top of the chain
*/

// The __proto__ property can be console logged and it showns the link to userFunctionStore

// Solution  3 -> Conceptually the same but using new keyword

function UserCreator3(name, score){
  // this.__proto__ it's linked to userCreator.prototype
  this.name = name
  this.score = score
  // return this object to user8
}

UserCreator3.prototype // {}
UserCreator3.prototype.increment = function(){
  this.score++
}

const user8 = new UserCreator('Dan', 10)
// it's not in user -> so checks in prototype of userCreator3, finds it -> execute
user8.increment()

/*
Benefits: faster to write. Often used in practice
Problem - 95% of developers doesn't know how it works
        - We have to upper case the first letter of the function so we know it requires new to work (convention)
*/
// Solution 4 -> class syntactic sugar -> changes how it looks but now how it works under the hood

class UserCreator {
  constructor(name, score){
    this.name = name
    this.score = score
  }
  increment(){ this.score++ }
  login(){ console.log('login') }
}

const userClass = new UserCreator('Name', 10)
userClass.increment()

/*
  New standard
  Feels more like other languages
*/
