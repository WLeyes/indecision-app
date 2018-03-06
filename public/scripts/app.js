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
  name: 'John',
  age: 18,
  location: 'Springfield'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'article',
  null,
  React.createElement(
    'section',
    null,
    React.createElement(
      'h1',
      null,
      user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
      'p',
      null,
      'Age: ',
      user.age
    ),
    getLocation(user.location)
  )
);

var appRoot = document.querySelector('.app');
ReactDOM.render(templateTwo, appRoot);
