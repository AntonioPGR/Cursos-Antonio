import React from 'react';
import ReactDOM from 'react-dom';

// se quiser escreveer uma expressão js dentro do jsx, vocÊ deve usar parenteses, pois se não, ele irá basicamente tratar como uma string
ReactDOM.render(
    <h1>{2 + 3}</h1>,
    document.getElementById('root'),
);