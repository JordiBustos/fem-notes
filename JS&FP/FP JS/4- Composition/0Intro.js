/*
  Data flowing around function compositions
  f(g(x)):
    data -> f(x) -> dataChanged -> g(dataChanged) -> dataChangedAgain
*/

var ender = (ending) => (input) => input + ending;

var adore = ender(' rocks');
var announce = ender(", y'all");
var exclaim = ender('!');

var hypeUp = (x) => exclaim(announce(adore(x)));

hypeUp('JS'); // JS rocks, y'all
hypeUp('FP'); // FP rocks, y'all
