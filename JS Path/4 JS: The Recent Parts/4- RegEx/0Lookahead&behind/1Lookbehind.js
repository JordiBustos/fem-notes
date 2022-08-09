var msg = 'Hello World';

            //lookbehind -> what's after to the pattern l. (if exists) should have behind and e
msg.match(/(?<=e)(l.)/g);
// ['ll']

msg.match(/(?<=r)(l.)/g);
// ['ld']

msg.match(/(?<!e)(l.)/g);
// ['lo', 'ld']
