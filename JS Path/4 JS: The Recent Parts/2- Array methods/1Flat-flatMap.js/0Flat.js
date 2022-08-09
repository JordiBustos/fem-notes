var nestedValues =
    [1, [2, 3], [[]], [4, [5] ], 6];

nestedValues.flat(0);
// [1, [2, 3], [[]], [4, [5]], 6] doing nothin

nestedValues.flat(/* default = 1 */);
// [1, 2, 3, [], 4, [5], 6] one level of nesting is removed

nestedValues.flat(2);
// [1, 2, 3, 4, 5, 6]

nestedValues.flat(Infinity);
