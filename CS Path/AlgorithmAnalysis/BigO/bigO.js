/*
A way of talking about how efficient an algorithm is.    
In a broad sense.

Algorithm: 3x²+x+1 -> O(x²) because it's the most relevan
t factor
*/

function crossAdd(input) {
    var answer = [];
    for (let i = 0; i < input.length; i++) {
        var goingUp = input[i];
	var goingDown = input[input.length - 1 -i];
	answer.push(goingUp + goingDown)
    }
    return answer
}

// complexity O(n) where n is the length of arr
// loops are the most important in the analysis the body is not relevant to the analysis

function find(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
	if (haystack[i] == needle) return true
    }
}


// O(n) because we count the worst case scenario. Linear time.

function makeTuples(input) {
    var answer = [];
    for(let i = 0; i < input.length; i++) {
	for (let i = 0; j < input.length; j++) {
	    answer.push([input[i], input[j]]);
	}
    }
    return answer
}

// O(n²) because there are two nested loops. Quadratic time.

function getMiddleOfArr(arr) {
    return arr[Math.floor(arr.length / 2)];
} 

// O(1) because no matter how long arr is still takes the same time to do it. Constant time.
