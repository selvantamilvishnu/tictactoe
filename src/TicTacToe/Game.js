import React, { useCallback, useState, useEffect } from "react";
import Board from "./Board";
import { calculateWinner } from "./helper.js";
import Choose from "./Choose";
import ResultPopUp from "./ResultPopUp";

const Game = () => {
  const [maze, setMaze] = useState("");
  const [symbol, setSymbol] = useState("x");
  const [gameStart, setGameStart] = useState(false);
  const [board, setBoard] = useState(Array(3).fill(null));
  const [xIsNext, setXisNext] = useState("x");
  const [counter, setCounter] = useState(null);
  const [winnerStr, setWinnerStr] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const winner = calculateWinner(board, maze);

  useEffect(() => {
    if (gameStart === true) {
      if (symbol === xIsNext && winner == null) {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }
      systemMove();
    }
    const declareWinner = (winner) => {
      let winnerStr;
      switch (winner) {
        case "x":
          if (winner === symbol) winnerStr = "Cheers you have won the game!";
          else winnerStr = "You did well, better luck next time!";
          break;
        case "o":
          if (winner === symbol) winnerStr = "Cheers you have won the game!";
          else winnerStr = "You did well, better luck next time!";
          break;
        default:
          if (counter === 0) winnerStr = "The time is over";
          else if (!board.includes(null)) winnerStr = "The match is draw";
      }
      setWinnerStr(winnerStr);
      setTimeout(() => setModalOpen(true), 300);
    };
    if (winner !== null || counter === 0 || !board.includes(null)) {
      declareWinner(winner);
    }
  }, [counter, gameStart, symbol, xIsNext, winner]);

  const handleClick = (i) => {
    if (!board[i]) {
      humanMove(i, xIsNext);
    }
  };

  const humanMove = useCallback(
    (i, xIsNext) => {
      const boardCopy = board.concat();
      if (winner || boardCopy[i]) return;
      boardCopy[i] = xIsNext;
      setBoard(boardCopy);
      setXisNext(xIsNext === "x" ? "o" : "x");
      return boardCopy;
    },
    [symbol, winner, board, counter]
  );

  const systemMove = useCallback(() => {
    const boardCopy = board.concat();

    if (symbol !== xIsNext) {
      let index;
      if (symbol !== xIsNext) {
        index = getRandomInt(0, 8);
      }
      if (winner || boardCopy[index]) return;
      boardCopy[index] = xIsNext === "x" ? "x" : "o";
      setBoard(boardCopy);
      setXisNext(xIsNext === "x" ? "o" : "x");
      // const count = maze === '3x3' ? 30 : maze === '4x4' ? 120 : 180;
    }
  }, [humanMove, maze, symbol, winner, xIsNext, board, counter]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onChangeMaze = (e) => {
    setMaze(e.target.value);
  };

  const choosePiece = (piece) => {
    setSymbol(piece);
    setXisNext(piece);
  };
  const renderMove = () => {
    const count = maze === '3x3' ? 60 : maze === '4x4' ? 120 : 180;
    const squareBoard =
      maze === "3x3"
        ? Array(9).fill(null)
        : maze === "4x4"
        ? Array(16).fill(null)
        : Array(25).fill(null);
    setBoard(squareBoard);
    setCounter(count);
    setModalOpen(false);
  };

  const onStart = () => {
    const squareBoard =
      maze === "3x3"
        ? Array(9).fill(null)
        : maze === "4x4"
        ? Array(16).fill(null)
        : Array(25).fill(null);
    const count = maze === "3x3" ? 60 : maze === "4x4" ? 120 : 180;
    setBoard(squareBoard);
    setGameStart(!gameStart);
    setCounter(symbol === xIsNext ? count : 0);
    setModalOpen(false);
  };

  return (
    <div>
      {!gameStart ? (
        <div className="game-wrap">
          <Choose
            maze={maze}
            symbol={symbol}
            xIsNext={xIsNext}
            onStart={onStart}
            onChangeMaze={onChangeMaze}
            choosePiece={choosePiece}
          />
        </div>
      ) : (
        <div className="game-wrap">
          <Board
            squares={board}
            maze={maze}
            symbol={symbol}
            xIsNext={xIsNext}
            counter={counter}
            onClick={handleClick}
          />
        </div>
      )}
      <ResultPopUp
        isOpen={modalOpen}
        winner={winner}
        winnerStr={winnerStr}
        close={() => setModalOpen(false)}
        startNewGame={renderMove}
      />
    </div>
  );
};

export default Game;
