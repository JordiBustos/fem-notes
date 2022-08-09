var nestedValues =
    [1, [2, 3], [[]], [4, [5] ], 6];

[1, 2, 3].map(function tuples(v) {
  return [v * 2, String(v* 2)];
});
// [ [2, '2'], [4, '4'], [6, '6'] ]

[1,2,3].map(function tuples(v) {
  return [v * 2, String(v * 2) ];
}).flat();
// [2, '2', 4, '4', 6, '6']

[1,2,3].flatMap(function all(v){
  return [v*2, String(v*2)];
});
// [2, '2', 4, '4', 6, '6']

// flatMap just goes one level


// remove and add elements with flatMap
[1, 2, 3, 4, 5, 6].flatMap(function doubleEvens(v) {
  return (v % 2 == 0) ? [v, v*2] : [];
});
// [[], [2, 4], [], [4, 8], [], [6, 12]] before flatten
// [2, 4, 4, 8, 6, 12] after flatten
