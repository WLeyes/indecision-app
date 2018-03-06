console.log('App.js is running');
// JSX - Javascript XML


////////////////////////////////////////////////////////////////////////////////
// TEMPLATE 1
////////////////////////////////////////////////////////////////////////////////

var app = {
  title: 'Indecision App.',
  subTitle: 'Put your life in the hands of a computer.'
}

var template = (
  <article>
    <section>
      <h1>{app.title}</h1>
      <h2>{app.subTitle}</h2>
    </section>
  </article>
);

////////////////////////////////////////////////////////////////////////////////
// TEMPLATE 2
////////////////////////////////////////////////////////////////////////////////
var user = {
  firstName: 'John',
  lastName : 'Smith',
  age      :  60,
  location: 'Springfield'
};

var templateTwo = (
  <article>
    <section>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </section>
  </article>
);

var appRoot = document.querySelector('.app');
ReactDOM.render(templateTwo, appRoot);
