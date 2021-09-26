import React from 'react';

//?STYLES
import './UpdateButton.css';

const UpdateButton = ({ text, handleClick }) => {
	return (
		<button className="UpdateButton" onClick={handleClick}>
			{text}
		</button>
	);
};

export default UpdateButton;
