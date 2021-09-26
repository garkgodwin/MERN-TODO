import React from 'react';

//?STYLES
import './PrimaryButton.css';

const PrimaryButton = ({ text, handleClick = null }) => {
	return (
		<button onClick={handleClick} className="PrimaryButton">
			{text}
		</button>
	);
};

export default PrimaryButton;
