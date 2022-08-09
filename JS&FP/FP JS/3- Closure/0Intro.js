/*
  Return the inner function and it will "remember" the outer function scope.
*/

function makeAdjectifier(adjective) {
  return function(noun) {
    return adjective + ' ' + noun;
  };
}

const coolify = makeAdjectifier('cool');

coolify('workshop'); // 'cool workshop'
coolify('drink');    // 'cool drink'
