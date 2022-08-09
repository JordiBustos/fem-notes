/*
Imagine we have 10000 urls, we need to wait untill all
fetchs are done to return one single array (results) with all the information
but what if we can return the text one at the time
*/
async function fetchURLs(urls) {
  var results = [];

  for (let url of urls) {
    let resp = await fetch(url)

    if (resp.status == 200) {
      let txt = await resp.text();
      result.push( text );
    } else {
      result.push( undefined );
    }
  }
  return results
}

// -----------------------------
async function *betterFetchURLs(urls) {
    var prs = urls.map( fetch )

    for (let pr of ors) {
      let resp = await pr;
      if (resp.status == 200) {
        let text = await resp.text();
        yield text;
      }
      else {
        yield undefined;
      }
    }
}

// when we call .next on the asynchronous generator we don't get the
// iterator result itself, but a promise for the iterator result

async function main(favoriteSites) {
  var it = betterFetchURLs( favoriteSites );

  while (true) {
    let res = await it.next();
    if (res.done) break;
    let text = res.value;

    console.log(text)
  }
}

// the same as
// push and pull at the same time
async function mainSugar(favoriteSites) {
  // we stop at every promise untill is finished
  for await (let text of betterFetchURLs( favoriteSites )) {
    console.log(text);
  }
}
