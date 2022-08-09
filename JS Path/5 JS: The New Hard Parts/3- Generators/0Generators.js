function createFlowFake(arr) {
    let i = 0;
    const inner = {
        next: function() {
            if (i < arr.length) {
                return { value: arr[i++], done: false };
            }
            return { value: undefined, done:true }
        }
    }
    return inner
}

const nextElement = createFlowFake([1, 2, 3]);
const element1 = nextElement.next();
const element2 = nextElement.next();
const element3 = nextElement.next(); // 3
const element4 = nextElement.next(); // undefined

/*
Once we start thinking of our data as flows
we can rething how we produce those flows - JavaScript
now lets us produce the flows using a function
*/

function *createFlow() {
    yield 4
    yield 5
    yield 6
}

const returnNextElement = createFlow();
const el1 = returnNextElement.next();
const el2 = returnNextElement.next();
const el3 = returnNextElement.next(); // {value: 6, done: false}
const el4 = returnNextElement.next(); // {value: undefined, done:true}

/*
    createFlow() doesn't creates a new execution context
    instead returns an object { next: some function }

    returnNextElement.next() will open the execution context of createFlow()
    yield suspends the execution context but not delete it and yields (kinda returns) the output

*/