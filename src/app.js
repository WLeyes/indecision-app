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
  name: 'John',
  age      :  18,
  location: 'Springfield'
};

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <article>
    <section>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </section>
  </article>
);

var appRoot = document.querySelector('.app');
ReactDOM.render(templateTwo, appRoot);
