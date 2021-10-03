import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = <li>{
    people.map((person,i) => <li key={"person_"+i}>{person}</li>)    
}</li>;

ReactDOM.render(
  peopleList,
  document.getElementById('app')
)