function *createFlow() {
    const num = 10;
    // returns 10 and newNum remains undefined
    // because yield suspends execution content before assignement occur
    const newNum = yield num;
    yield 5 + newNum;
    yield 6;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next(); // 10;
console.log(element1)
// yield num becomes the argument and newNum get assigned 2
const element2 = returnNextElement.next(2); // 7
console.log(element2)

const element3 = returnNextElement.next();
console.log(element3)

/*
    Next saves the execution context in the COVE (state of values) and returnNextElement has a property called
    [[generatorLocation]] and that is the line of code when we paused the execution context
*/