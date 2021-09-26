import React from 'react';

//?STYLES
import './FormGroup1.css';

const FormGroup1 = ({ label, placeholder, details, setDetails }) => {
	return (
		<div className="FormGroup1">
			<label className="fg1-label">{label}</label>
			<input
				type="text"
				className="fg1-input"
				placeholder={placeholder}
				value={details.title}
				onChange={(e) => {
					setDetails({
						...details,
						title: e.target.value,
					});
				}}
			/>
		</div>
	);
};

export default FormGroup1;
