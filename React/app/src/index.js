import React from 'react';
import ReactDOM from 'react-dom';

class Random extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentColor: '',
    }
    this.newColor = this.newColor.bind(this)
  }

  newColor(){
    function ramdomColor(min, max){
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const color1 = ramdomColor(0, 256);
    const color2 = ramdomColor(0, 256);
    const color3 = ramdomColor(0, 256);

    const color = `rgb(${color1}, ${color2}, ${color3})`;
    this.setState({
      currentColor: color,
    })
    document.querySelector('body').style.backgroundColor = color
  }

  render(){
    return(
      <div>
        <h1>{this.state.currentColor===''?"Click on the button to get a new random color":`your actually color is ${this.state.currentColor}`}</h1>
        <button onClick={this.newColor}>Change Color</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Random />,
  document.querySelector("#root")
)