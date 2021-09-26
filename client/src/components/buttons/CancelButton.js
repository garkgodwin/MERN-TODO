import React from 'react';

//?STYLES
import './CancelButton.css';

const CancelButton = ({ text, handleCancel = null, cancelStyle }) => {
	return (
		<button
			onClick={handleCancel}
			className="CancelButton"
			style={cancelStyle}>
			{text}
		</button>
	);
};

export default CancelButton;
