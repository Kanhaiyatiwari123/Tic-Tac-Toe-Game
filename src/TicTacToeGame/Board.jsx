import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];       //as state[a],state[b] & state[c] are same, and having either "X" or either "Y" in all 3 states.
      }
    }  
    return false;
  };

  const isWinner = checkWinner();
  const isBoardFull = state.every(square => square !== null);

  const handleClick = (index) => {
    if(state[index] !== null) {
      return;
    }

    const copystate = [...state];
    copystate[index] = isXTurn ? "X" : "O";
    setState(copystate);
    setisXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      { isWinner ? <p>{isWinner} won the game <button onClick={handleReset}>Play Again</button></p> :        /*there are no () while calling function in javascript, and we can also directly setState on onClick callback function right here instead of making another(handleReset) function for play again */ 
        isBoardFull ? <>Game is a Draw <button onClick={handleReset}>Play Again</button></> :
    <><>
        <h4>Player { isXTurn ? "X" : "O" } please move</h4>
        <div className="board-row">
          <Square onClick={() => handleClick(0)} value={state[0]} />     {/*onClick is just a prop here passed by Square component's div*/}
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div><div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div><div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div></></> }
    </div>
  );
};

export default Board;
