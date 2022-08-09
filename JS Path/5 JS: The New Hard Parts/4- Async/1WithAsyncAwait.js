async function createFlow() {
    console.log("Me first!");
    const data = await fetch("https://twitter.com/will/1");
    console.log(data);
}

createFlow();
console.log("Me second");

// Me first!
// Me second
// data

/*
    We auto trigger the resumption of the createFlow execution context when promise value is updated
    re entering where we left paused the createFlow execution context and assigns to data the response from the server. 
*/