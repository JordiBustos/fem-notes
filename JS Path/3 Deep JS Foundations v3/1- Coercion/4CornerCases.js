/*
  Why one and zeros are bad idea when coers true and false
*/


1 < 2 // true
2 < 3 // true

1 < 2 < 3 // true but...

(1 < 2) < 3 // ->
(true) < 3 // ->
1 < 3      // true


//************

3 > 2 // true
2 > 1 // true

3 > 2 > 1 // false ¿?

(3 > 2) > 1
(true) > 1
1 > 1 // false


/*
  Any empty string or whitespaces get coers to 0 
*/

Number('') // 0

Number('         ') // 0
