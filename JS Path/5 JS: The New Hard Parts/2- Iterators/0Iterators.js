const numbers = [1, 2, 3, 4];

// manually grab each element, quite imperative way
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// iterators -> a new way of thinking about using each element one-by-one
// rethink data as a flow of elements

function createFunction(arr) {
    let i = 0; 
    
    function next() {
        if (i == arr.length) i = 0;
        return arr[i++];
    }
    // returns entirely function definition
    // and saves scope context in the Closed over variable environment of the function
    return next;
}

// nextElement is an iterator function
const nextElement = createFunction([1, 2, 3, 4]);
const el1 = nextElement(); // 1
const el2 = nextElement(); // 2

const newNextElement = createFunction([1, 2, 3, 4]);
const newEl = newNextElement(); // 1

/*
    When te function next is defined it gets a bond to the surrounding local memory in which it has been defined

    When we return out next, that surrounding live data is returned out too -attached on the 'back' of the function definition itself (COVE)
    
    When we call nextElement and don't find array or i in the immediate execution context we look into the function definition's COVE of persisnten live data

    The C.O.V.E is the same as closure

    COVE is saved on the hidden property [[scope]]

*/