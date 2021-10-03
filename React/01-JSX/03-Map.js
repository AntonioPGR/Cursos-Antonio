import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = <ul>{
    people.map(person =>
        <li>{person}</li>
    )
}</ul>;

ReactDOM.render(
  peopleList,
  document.getElementById('root')
)