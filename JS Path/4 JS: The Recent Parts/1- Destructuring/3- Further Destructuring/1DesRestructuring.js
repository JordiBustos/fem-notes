// Advanced usage:
var defaults = {
  url: "https://some.base.url/api",
  method: 'post',
  headers: [
    'Content-Type: text/plain'
  ]
};
console.log(defaults);
/**************/

var settings = {
  url: 'http://some.other.url',
  data: 42,
  callback: function(resp) { /*.. */ }
};

// overwrittes {} with defaults and <- with settings
ajax(_.extend({}, defaults, settings) );
// or ajax(Object.assign({}, defaults, settings) );

/* With destructuring */

function ajaxOptions({
  // destructuring with default values
  url = 'https://some.base.url/api',
  method = 'post',
  data,
  callback,
  headers: [
    headers0 = 'Content-type: text/plain',
    ...otherHeaders
  ] = [],
  ...otherArgs
} = {}) {
    // Restructuring with new values
    return {
      url, method, data, callback,
      headers: [
        headers0,
        ...otherHeaders
      ],
      ...otherArgs
    };
}

var defaults = ajaxOptions();

console.log(defaults);

//***********************

var settings = {
  url: 'http://some.other.url',
  data: 42,
  callback: function(resp) { /*...*/ }
}

ajax( ajaxOptions( settings ) )
