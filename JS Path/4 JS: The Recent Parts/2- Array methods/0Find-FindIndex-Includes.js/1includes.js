var arr = [10, 20, NaN, 30, 40, 50];

arr.indexOf( 30 ) != -1; // true
~arr.indexOf( 20 ); -2   // (truthy)
~arr.indexOf( NaN ); -0  // (falsy)

//****************** Uses Object.is()

arr.includeS( 20 ) // true
arr.includes( 60 ) // false
arr.includes( 20, 3 ) // false
arr.includes(10, -2)  // false
arr.includes(40, -2)  // true
arr.includes( NaN )   // true
