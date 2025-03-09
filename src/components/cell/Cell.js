import React from 'react';
import classNames from 'classnames';

import './Cell.css';

export const Cell = (props) => {
	const CellClasses =classNames({
		cell: true,
		winner: props.canHighlight
	});

	const CellContentClass =classNames({
		'cell-content': true,
		populated: props.value
	});


  return (<>
    	<button className={CellClasses} onClick={props.onClick}>
    	    <span className={CellContentClass}>{props.value}</span>
    	</button>
  </>
  );
}
