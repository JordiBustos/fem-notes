// solve 1 to 6 here

// Challenge 1
/*
A) Create a for loop that iterates through an array and returns the sum 
    of the elements of the array.
B) Create a functional iterator for an array that returns each value 
    of the array when called, one element at a time.
*/

function sumLoop(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumFunc(arr) {
    let i = 0;

    function inner() {
        if (i < arr.length) {
            return arr[i++];
        }
    }
    return inner;
}

// --------------------------------------------------------------

// Challenge 2
/* Create an iterator with a next method that returns each value
of the array when.next is called. */

function nextIterator(arr) {
    let i = 0;

    const iterator = {
        next: function() {
            return arr[i++];
        }
    }
    return iterator;
}

// --------------------------------------------------------------

//Challenge 3
/* Write code to iterate through an entire array 
using your nextIterator and sum the values. */

function toSumIteartor(arr) {
    let acc = 0;
    let it = nextIterator(arr);
    let next = it.next();
    while (next) {
        acc += next;
        it = it.next();
    } 
    return acc;
}


// --------------------------------------------------------------

// Challenge 4
/* Create an iterator with a next method that returns 
each value of a set when .next is called */

function setIterator(set) {
    let setIterator = set.values();
    const iterator = {
        next: function() {
            let next = setIterator.next();
            return next['value'];
        }
    }
    return iterator
}

// --------------------------------------------------------------

// Challenge 5
/* Create an iterator with a next method that returns an array with two elements
(where the first element is the index and the second is the value at that index)
when .next is called. */

function tupleIterator(arr) {
    let i = 0;
    function inner(){
        return [i, arr[i++]]
    }

    return inner
} 

// --------------------------------------------------------------

// Challenge 6
/* Create an iterator that returns each word from a string of words
on the call of its
.next method (hint: use regex!)
Then attach it as a method to the prototype of
a constructor Words. Hint: research Symbol.iterator! */
class Words {
    constructor(string) {
        this.str = string;
    }
}

Words.prototype[Symbol.iterator] = function() {
    // YOUR CODE HERE
    let index = 0;
    const splitStr = this.str.split(/\s/);
    return {
        next: function () {
            if (index < splitStr.length) {
                const value = splitStr[index];
                index ++;
                return {value: value, done: false};
            } else {
                return {value:undefined, done: true };
            }
        }
    }
}


// --------------------------------------------------------------
