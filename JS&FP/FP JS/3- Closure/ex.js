function writeMessage(message, salutation, name) {
  return md`<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}


// TODO
function signMessageWith(salutation) {
  return (message, name) => writeMessage(message, salutation, name);
}

function makeSignature(salutation, name) {
  return message => writeMessage(message, salutation, name);
}


// Currying
function quote(name, year, text) {
  return md`<p style="font-size:smaller;padding:1em;font-family:monospace;">"${text}"<br>- ${name} (${year})</p>`;
}

var grumpyQuotes = html`${[
  quote(
    'Guido van Rossum',
    2001,
    "Don't you hate code that's not properly indented?"
  ), // https://slashdot.org/story/01/04/20/1455252/guido-van-rossum-unleashed

  quote(
    'Doug Crockford',
    2005,
    'There are no good texts on JavaScript programming.'
  ), // http://crockford.com/javascript/style1.html

  quote(
    'Doug Crockford',
    2008,
    'JavaScript is an astonishing language, in the very worst sense.'
  ), // http://crockford.com/javascript/popular.html

  quote(
    'Edsger Dijkstra',
    1978,
    'Object oriented programming is an exceptionally bad idea which could only have originated in California.'
  ), // https://www.quora.com/Why-did-Dijkstra-say-that-%E2%80%9CObject-oriented-programming-is-an-exceptionally-bad-idea-which-could-only-have-originated-in-California-%E2%80%9D/answer/Terry-Moore-32

  quote(
    'Edsger Dijkstra',
    1975,
    'By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.'
  ), // https://www.cs.utexas.edu/users/EWD/ewd04xx/EWD498.PDF

  quote(
    'Edsger Dijkstra',
    1975,
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."
  ) // ibid.
]}`

const curriedQuote = name => year => text => quote(name, year, text);

const quoteCrockford = curriedQuote('Doug Crockford');

const quoteDijkstra = curriedQuote('Edsger Dijkstra');
const quoteDijkstra75 = quoteDijkstra(1975)

var stillGrumpyQuotes = html`${[
  curriedQuote('Guido van Rossum')(2001)(
    "Don't you hate code that's not properly indented?"
  ),

  quoteCrockford(2005)('There are no good texts on JavaScript programming.'),

  quoteCrockford(2008)(
    'JavaScript is an astonishing language, in the very worst sense.'
  ),

  quoteDijkstra(1978)(
    'Object oriented programming is an exceptionally bad idea which could only have originated in California.'
  ),

  quoteDijkstra75(
    'By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.'
  ),

  quoteDijkstra75(
    "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."
  ),

  quoteDijkstra75(
    "The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]"
  )
]}`
