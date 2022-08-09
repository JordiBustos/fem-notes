/*
  Named arguments:
    Avoids positional arguments
    Allows to skip some parameters by assigning default values to them
    cons: instead of remember order you should remember names of properties
*/

function sum(a, b) { return a + b }
sum(10 /*this is a*/, 20 /*this is b*/)

function lookupRecord(store = 'person-records', id=-1) {
  //...
}

function lookupRecordTwo({
  store = 'person-records',
  id = -1
}) {
  //...
}

lookupRecord('', 42);
lookupRecordTwo( {id: 42} ); // passes just id
