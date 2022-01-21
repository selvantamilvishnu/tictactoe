import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, maze, counter }) => (
  <div className="board-wrap">
    <p className="counter">Time: {counter}</p>
    <div
      className={`${
        maze === "3x3"
          ? "main-board main-board-three"
          : maze === "4x4"
          ? "main-board main-board-four"
          : "main-board main-board-five"
      }`}
    >
      {squares.map((square, i) => (
        <Square value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);

export default Board;

// import React from 'react';
// import Square from './Square';
// // import './Board.css';

// const Board = ({squares, onClick, maze, counter, symbol, xIsNext}) => (
//     <div>{console.log(symbol, xIsNext, 'From Board')}
//         {/* { symbol === xIsNext ? <p className="counter">Time: {counter}</p> : ''} */}
//         <p className="counter">Time: {counter}</p>
//         <div className={`${maze === '3x3' ? 'main-board main-board-three' : maze === '4x4' ?
//         'main-board main-board-four' : 'main-board main-board-five' }`}>
//             {squares.map((square, i) =>
//                 (<Square value={square} onClick={() => onClick(i)} />)
//             )}
//         </div>
//     </div>
// )

// export default Board
