import React from "react";

const Chooser = ({ maze, onChangeMaze, symbol, xIsNext, choosePiece, onStart }) => {
  return (
    <div
      className={"piece-chooser-wrap" + (symbol === xIsNext ? "" : " inactive")}
    >
      <h1>Enter the maze (e.g. 3x3, 4x4, 5x5)</h1>
      <div className="piece-chooser">
        <input type="text" onChange={(e) => onChangeMaze(e)} value={maze} />
      </div>
      <h1>Which one you always choose?</h1>
      <div className="piece-chooser">
        <button className="side-o" onClick={() => choosePiece("o")}></button>
        <span>or</span>
        <button className="side-x" onClick={() => choosePiece("x")}></button>
      </div>
      <button className="start-button" onClick={onStart}>Start the Game</button>
    </div>
  );
};

export default Chooser;
