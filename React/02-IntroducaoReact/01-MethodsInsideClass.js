import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component{
  // metodos e vatiaveis simples devem ser escritas dentro do render, metodos que desejamos reutilizar ou são mais complexos devemos escrever fora do render e dentro da classe

  render(){
      const friend = friends[2]

      return(
          <div>
              <h1>{friend.title}</h1>
              <img 
              src={friend.src}
              />
          </div>
      )
  }
}

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
)