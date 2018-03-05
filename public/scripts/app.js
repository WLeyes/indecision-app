'use strict';

console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
  'h1',
  null,
  'Looking for change'
);
var appRoot = document.querySelector('.app');

ReactDOM.render(template, appRoot);
