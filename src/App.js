import { useState } from "react";
import { Game, move, status, moves, aiMove, getFen } from "js-chess-engine";

function App() {
  function setCurrBoard() {
    let xaxis = {
      1: "A",
      2: "B",
      3: "C",
      4: "D",
      5: "E",
      6: "F",
      7: "G",
      8: "H",
    };
    let yaxis = {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
    };

    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        let piece = board[xaxis[i] + yaxis[j]];
        if (piece) {
          boardArray[xaxis[i] + yaxis[j]] = piece;
        } else {
          boardArray[xaxis[i] + yaxis[j]] = " ";
        }
      }
    }
  }

  const game = new Game();
  // game.printToConsole();
  // const [currBoard, setCurrBoard] = useState([{}, {}]);

  let board = game.board.configuration.pieces;
  // console.log(board);

  let boardArray = {};
  setCurrBoard();
  // console.log(board);

  const [possibleMoves, setPossibleMoves] = useState([]);
  const tempFn = (x, y) => {
    console.log(x + " " + y);
    setPossibleMoves(game.moves(x));
    console.log(possibleMoves);
  };

  const keys = Object.keys(boardArray);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="pointer grid grid-cols-8">
        {keys.map((val) => (
          <div
            key={val}
            className={
              "w-16 h-16 border border-black flex items-center justify-center hover:border-2 " +
              (possibleMoves.includes(val) && "bg-gray-400")
            }
            // id={val}
            onClick={() => tempFn(val, boardArray[val])}
          >
            {boardArray[val]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
