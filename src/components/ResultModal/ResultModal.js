import React from 'react';
import './ResultModal.css';
import classNames from 'classnames';

export const ResultModal = (props) => {
	
	const reusltModalClasses = classNames({
		'modal-open': props.isGameOver
	})
	// const user = props.winner === 'X' ? 'Otelliq' : 'ckannane'
	const message = props.winner ? `Winner is ${props.winner}.` : `Its a Tie`;

  return (
  	<div id="modal-overlay" className={reusltModalClasses}>
  	    <div id="game-result-modal">
  	        <div id="result-container">
  	            <div id="winner-container">
  	                <span>{message}</span>
  	            </div>
  	        </div>
  	        <div id="new-game-container">
  	            <button id="new-game-button"
				onClick={props.onNewGameClicked}>Start New Game</button>
  	        </div>
  	    </div>
  	</div>
  );
}
