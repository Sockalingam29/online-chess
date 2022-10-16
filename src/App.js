  import React from "react";
  import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'

  function App() {
    const game = new Game();
    // console.log(game.board.configuration.pieces);
    // console.log(game.move('A2','A4'));
    // // game.printToConsole()
    // // console.log(game.exportJson())
    // // console.log(game)
    let board = game.board.configuration.pieces;
    let boardArray = {};
    let xaxis={1:'A',2:'B',3:'C',4:'D',5:'E',6:'F',7:'G',8:'H'};
    let yaxis={1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8'};
    
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        let piece = board[xaxis[i]+yaxis[j]];
        if (piece) {
          boardArray[xaxis[i]+yaxis[j]]=piece;
          // boardArray[i-1].push(piece);
        } else {
          boardArray[xaxis[i]+yaxis[j]]=" ";
        }

      }
    }
    console.log(boardArray);
    console.log(game.moves('D2','D4'));
    3,1
    
    const keys = Object.keys(boardArray)
    // console.log(keys)

    return (
      <div style={{display:"grid",gridTemplateColumns: "auto auto auto"}}>
        {
          keys.map((val)=><div style={{border:"1px solid black",width:"40px",height:"40px"}}>{boardArray[val]}</div>)
        }
      </div>
    );
  }

  export default App;
