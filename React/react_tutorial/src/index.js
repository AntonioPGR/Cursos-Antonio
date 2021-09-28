import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Classes =====================================
class Game extends React.Component {
    render(){
        return(
            <div className="game">
                <Board />
                <div className="gameInfo">
                    <div>{/* STATUS */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        );
    }
}

class Board extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            moves: Array()
        }
    }

    render(){
        const status = calculateWinner(this.state.squares) != null?`Winner: ${calculateWinner(this.state.squares)}` : `Next player: ${this.state.xIsNext? "X":"O"}`;

        return(
            <div className="gameBoard">
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    } 

    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={()=>{this.handleClick(i)}}/>;
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        const moves = this.state.moves;

        // verifica se o quadrado esta vazio, se nã otiver nã oexecuta nada
        if(!squares[i]  && !calculateWinner(this.state.squares)){
            squares[i] = this.state.xIsNext? "X" : "O";
            moves.push(squares);
            this.setState({squares: squares, xIsNext: !this.state.xIsNext, moves:moves});
            console.log(moves);
        } 
    }                           
}

// componentes de função square, são os mais simples de serem escritos, contém apenas um método render e não possuem seu próprio state., util para classes pequenas como esta
function Square(props){
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// Execução do código ==========================
ReactDOM.render(<Game />, document.getElementById('root')) 
/* (element, container[, callback])
element: elemento (classe) que será carregada no conteiner, nesse caso é a classe game; 
conteiner: local onde será carregado o element; 
callback: é opcional, e tu sabe o que é um callback kkk  */

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}
