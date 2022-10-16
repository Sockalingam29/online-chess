import { useState, useEffect } from "react";
import { Game, move, status, moves, aiMove, getFen } from "js-chess-engine";

function App() {
  const [boardArray2, setBoardArray2] = useState({});
  const game = new Game();
  let keys = Object.keys(boardArray2);
  console.log(game.exportJson());
  let board = game.exportJson().pieces;

  useEffect(() => {
    // console.log(board);

    // let boardArray = {};
    // console.log(board);

    setCurrBoard();
  }, []);

  function setCurrBoard() {
    let boardArray = {};
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
      board = game.exportJson().pieces;
      for (let j = 1; j <= 8; j++) {
        let piece = board[xaxis[i] + yaxis[j]];
        if (piece) {
          boardArray[xaxis[i] + yaxis[j]] = piece;
        } else {
          boardArray[xaxis[i] + yaxis[j]] = " ";
        }
      }
    }
    setBoardArray2({ ...boardArray });
    keys = Object.keys(boardArray2);

    console.log();
  }

  const [possibleMoves, setPossibleMoves] = useState([]);
  const [fromPosition, setfromPosition] = useState("");

  const tempFn = (x, y) => {
    if (possibleMoves.length > 0) {
      game.move(fromPosition, x);

      setCurrBoard();
      console.log("Dine");
      setfromPosition("");
      setPossibleMoves([]);
    } else {
      console.log(x + " " + y);
      setPossibleMoves(game.moves(x));
      setfromPosition(x);
      console.log(possibleMoves);
    }
  };

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
            onClick={() => tempFn(val, boardArray2[val])}
          >
            {boardArray2[val]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
