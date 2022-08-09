// CHALLENGE 7
/*
Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first
*/


function valueAndPrevIndex(array){
    let i = 0;

    inner = {
        sentence: function() {
            i++;
            let indexPos = i;
            if (i - 1 == 0) indexPos = 'First';
            return `${array[i-1]} was found after index ${indexPos}`
        }
    }

    return inner;
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());

// -------------------------------------------------

//CHALLENGE 8
/*
Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'.
Do not use any type of loop constructor and only make the call to createConversation once.
*/

function *createConversation(string) {
    if (string == 'english') {
        yield setInterval(() => console.log("Hello there"), 3000)
    } else {
        yield setInterval(() => console.log("gibberish"), 3000);
    }


}

console.log(createConversation('english').next());

// -------------------------------------------------

// fibonacci sequence

function *fibonacci() {
    [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}