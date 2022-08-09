// file named -> workshop.mjs

var teacher = 'Kyle';

export default function ask(question) {
  console.log(teacher, question);
};

/*
The only way to make something public is you use the export keyword
if not everything is assumed to be private
One module per file
*/

/* ----------------------------- */

// file named -> workshop.js

import ask from 'workshop.mjs';
ask('Default import');

// or

import * as workshop from 'workshop.mjs';
workshop.ask('Namespace import');
