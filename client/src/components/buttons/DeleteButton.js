import React from 'react';

//?STYLES
import './DeleteButton.css';

const DeleteButton = ({ text, handleClick }) => {
	return (
		<button className="DeleteButton" onClick={handleClick}>
			{text}
		</button>
	);
};

export default DeleteButton;
