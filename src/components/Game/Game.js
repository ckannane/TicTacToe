import React , {useState} from 'react';
import './Game.css';
import {ResultModal} from '../ResultModal/ResultModal'
import { Board } from '../Board/Board';
import { calculateWinner } from '../../utils/WinnerCalculator';


export const Game = () => {
    const [cellValues, setCellValues] = useState(['','','','','','','','','']);
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver,setIsGameOver] = useState(false);
    const [numberofTurnsLeft, setNumberofTurnsLeft] = useState(9);
    const [winner , setWinner] = useState();
	const [winningCombination, setwinningCombination] = useState();

    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === ''

    const restartGame  = () => {
        setCellValues(['','','','','','','','','']);
        setXIsNext(true);
        setIsGameOver(false);
        setNumberofTurnsLeft(9);
        setWinner(undefined);
        setwinningCombination([]);
    }

    const onCellClicked = (cellIndex) =>{
        if(isCellEmpty(cellIndex)) {
        const newCellValues = [...cellValues];
        
        const NewNumberofTurnsLeft = numberofTurnsLeft -1;
        newCellValues[cellIndex] = xIsNext ? 'X': 'O';

        const calcResult = calculateWinner(newCellValues, NewNumberofTurnsLeft, cellIndex);
        setCellValues(newCellValues);
        setXIsNext(!xIsNext);
        setIsGameOver(calcResult.hasResult);
        setNumberofTurnsLeft(NewNumberofTurnsLeft);
        setWinner(calcResult.winner);
        setwinningCombination(calcResult.winningCombination);
        }
	};

  return (<>
  <div id="game">
      <h1>Tic Tac Toe</h1>
	  	<Board cellValues={cellValues}
        winningCombination={winningCombination}
        cellClicked={onCellClicked}
        ></Board>
      </div>
      < ResultModal
            isGameOver = {isGameOver}
            winner ={winner}
            onNewGameClicked = {restartGame}
      />
  </>
  );
}
