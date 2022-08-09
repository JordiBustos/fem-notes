/*
    We want to:
        1- Initiate a task that takes a long time
        2- Move on to more synchronous code 
        3- Run some functionality once the requested data has come back


Senior dev interview question:
*/
function doWhenDataReceived(data) {
    returnNextElement.next(data);
}

function *createFlow(url) {
    // promise object it's not assgined to data but to futureData because yield keyword
    const data = yield fetch(url);
    console.log(data);
}

const returnNextElement = createFlow('https://example.com/1');
const futureData = returnNextElement.next();

futureData.value.then(doWhenDataReceived);

/*
We get to control when we return back to createFlow and continue
executing - by setting up the trigger to do so
(returnNextElement.next()) to be run by our function that
was triggered by the promise resolution (when the value returned)
*/