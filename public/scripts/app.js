'use strict';

console.log('App.js is running');
// JSX - Javascript XML


////////////////////////////////////////////////////////////////////////////////
// TEMPLATE 1
////////////////////////////////////////////////////////////////////////////////

var app = {
  title: 'Indecision App.',
  subTitle: 'Put your life in the hands of a computer.'
};

var template = React.createElement(
  'article',
  null,
  React.createElement(
    'section',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'h2',
      null,
      app.subTitle
    )
  )
);

////////////////////////////////////////////////////////////////////////////////
// TEMPLATE 2
////////////////////////////////////////////////////////////////////////////////
var user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 60,
  location: 'Springfield'
};

var templateTwo = React.createElement(
  'article',
  null,
  React.createElement(
    'section',
    null,
    React.createElement(
      'h1',
      null,
      user.firstName,
      ' ',
      user.lastName
    ),
    React.createElement(
      'p',
      null,
      'Age: ',
      user.age
    ),
    React.createElement(
      'p',
      null,
      'Location: ',
      user.location
    )
  )
);

var appRoot = document.querySelector('.app');
ReactDOM.render(templateTwo, appRoot);
