/*
The idea of lookahead is essentially an assertion that says
when i match a thing i wanna lookahead and say that my match only happens
only if something inmediately after also matches. ONly matches the thing if the right thing after it also matches
*/

var msg = 'Hello World';

msg.match(/(l.)/g);
// ['ll', 'ld']

msg.match(/(l.)$/g);
// ['ld']

              //lookahead the next to l. should be a o
msg.match(/(l.)(?=o)/g);
// ['ll']
                //lookahead the next to l. should be different to o
msg.match(/(l.)(?!o)/g);
// ['lo', 'ld']
