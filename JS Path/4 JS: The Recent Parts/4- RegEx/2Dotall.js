var msg = `the quick brown fox
jumps over the
lazy dog
`;

// doesn't find because new line
msg.match(/brown.*over/);
// null

// matches across lines
msg.match(/brown.*over/s);
// ['brown fox\njumps over']
