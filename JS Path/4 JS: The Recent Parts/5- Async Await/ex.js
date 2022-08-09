function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

async function loadFiles(files) {
	// request all files concurrently
	// we get the promises
	var promises = files.map(getFile);

	// when the promises are resolved console.log the promise
	for (let promise of promises) {
		console.log(await promise);
	}
/*
	// this doesn't require the second file untill first file is finished
	var text1 = await getFile(files[0]);
	var text2 = await getFile(files[1]);
	var text3 = await getFile(files[2]);

	// this just receives promises not files
	var text4 = getFile(files[0]);
	var text5 = getFile(files[1]);
	var text6 = ggetFile(files[2]);
*/
	// print in order, sequentially
}

loadFiles(["file1","file2","file3"]);


// **************************************


function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}
