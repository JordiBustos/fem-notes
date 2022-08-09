var numbers = {
	*[Symbol.iterator]({
		start = 0,
		end=100,
		step=1;
	} = {}) {
		for (let i = start; i <= end; i+=step) {
			yield i
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
console.log(`My lucky numbers are: ${
	[...numbers[Symbol.iterator]({
		start: 6,
		end: 30,
		step: 4
	})]
}`);

// EXAMPLE
function makeRangeIterator(start = 0, end = 100, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

		// uses closure to save iterationCount & nextIndex state
    return rangeIterator = {
       next() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
}
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);

// With generator
function *sameWithGenerator(start = 0, end=100, step = 1) {
	let idx = 0;
	for (let i = start; i < end; i += step) {
		idx++
		yield i;
	}
	return idx
}

const a = sameWithGenerator();
a.next()
