"use strict";

var teacher = 'Kyle';

function otherClass(){
  teacher = 'Suzy';
  topic = 'React';
  console.log('Hi');
}

otherClass() // Reference Error topic is not defined
/*
  Strict Mode avoid creates auto-global variables or directly autocreate variables
*/
