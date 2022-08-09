/*
    Analysis of sorting and filtering:
    	It helps to make better code. If we have a lot of items we need to compare algorithms to make tradeoffs to choose or weather decide if is or not usefull to spend time making the algorithm more efficient.                                                        
*/

// Spatial complexity
/*
    How much stuff it needs to store at ram or disks locally.
    Linear:
    	We have an algorithm that for every item in the array 
	it need to create another array in the process of sorting
	it. So for an array of length 10 it will create 10 arrs
	
    Logarithmic:
    	For every item in the array it needed to create a diminishing ammount of extra array. 10 items let's say 7 arrays

    Constant:
    	Same space we were given when we started

    Quadratic:
    	Calculate every distance between the points of a given arr

*/

// TRADEOFFS
/*
- There are no rules. Everything has context. Algorithms are tools
- There are frequently multiple good choices. Almost never a perfect
- Some times details are important. Big O analyse the big picture
- If one function is called once a day it doesn't matter it if finishes in 300ms or 30 seconds (depends on context). 
- Readability and maintainability are the most important thigs about code. Code is communication.
- Sometimes simple code it's better than efficient code to avoids bugs and it's easier to maintain.
- Human time > computer time
- 99% of time use built-in features instead of implement some sort algorithm it's easier to call .sort()

*/

