'use strict';

console.log('App.js is running');
// JSX - Javascript XML


////////////////////////////////////////////////////////////////////////////////
// TEMPLATE 1
////////////////////////////////////////////////////////////////////////////////

var mainHeading = {
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
      mainHeading.title
    ),
    React.createElement(
      'h2',
      null,
      mainHeading.subTitle
    )
  )
);

////////////////////////////////////////////////////////////////////////////////
// TEMPLATE 2
////////////////////////////////////////////////////////////////////////////////
var user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 65,
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
ReactDOM.render(template, appRoot);
