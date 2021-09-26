import React from 'react';

//?STYLES
import './FormGroup2.css';

const FormGroup2 = ({ label, placeholder, details, setDetails }) => {
	return (
		<div className="FormGroup2">
			<label className="fg2-label">{label}</label>
			<textarea
				type="text"
				className="fg2-input"
				placeholder={placeholder}
				multiple={true}
				maxLength="100"
				value={details.description}
				onChange={(e) => {
					setDetails({
						...details,
						description: e.target.value,
					});
				}}
			/>
		</div>
	);
};

export default FormGroup2;
