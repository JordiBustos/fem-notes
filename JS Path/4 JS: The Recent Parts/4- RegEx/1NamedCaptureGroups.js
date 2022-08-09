var msg = 'Hello World';

msg.match(/.(l.)/);
// 'ell', 'll']

msg.match(/([jkl])o Wor\1/);
// ['lo Worl', 'l']

msg.match(/(<cap>l.)/).groups;
// {cap: ll}

msg.match(/(?<cap>[jkl])o Wor\k<cap>/);
// ['lo Worl', 'l']

msg.replace(/(<cap>l.)/g, '-$<cap>-');
// ['lo Worl', 'l']
