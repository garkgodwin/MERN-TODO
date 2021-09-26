import React, { useEffect, useState } from 'react';

//?STYLES
import './Filter.css';

const Filter = ({ todos, setFilteredTodos, filteredTodos }) => {
	const [type, setType] = useState(1); //? 1 = all | 2 = completed | 3 = not completed
	const [inputText, setInputText] = useState('');

	useEffect(() => {
		setFilteredTodos(todos);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		filter();
		// eslint-disable-next-line
	}, [type, inputText]);

	useEffect(() => {});

	const filter = () => {
		setFilteredTodos(
			todos.filter((todo) => {
				const title = todo.title.toLowerCase();
				const description = todo.description.toLowerCase();
				const input = inputText.toLowerCase();
				if (title.includes(input) || description.includes(input)) {
					if (type === 1) {
						return true;
					} else if (type === 2) {
						return todo.completed;
					} else if (type === 3) {
						return !todo.completed;
					} else {
						return true;
					}
				}
			})
		);
	};

	const handleChange = (e) => {
		const value = e.target.value;
		if (value === 'All') {
			setType(1);
		} else if (value === 'Done') {
			setType(2);
		} else if (value === 'Not Done') {
			setType(3);
		} else {
			setType(1);
		}
	};

	const handleTextChange = (e) => {
		const value = e.target.value;
		setInputText(value);
	};
	return (
		<div className="Filter">
			<div className="f-input-box">
				<input
					type="text"
					placeholder="Enter a description or a title"
					className="f-input"
					onChange={handleTextChange}
					value={inputText}
				/>
			</div>
			<div className="f-types">
				<div className="f-type">
					<input
						id="f-radio-1"
						type="radio"
						checked={type === 1 ? true : false}
						onChange={handleChange}
						name="radio"
						value="All"
					/>
					<label htmlFor="f-radio-1" className="f-label">
						All
					</label>
				</div>
				<div className="f-type">
					<input
						id="f-radio-2"
						type="radio"
						checked={type === 2 ? true : false}
						onChange={handleChange}
						name="radio"
						value="Done"
					/>
					<label className="f-label" htmlFor="f-radio-2">
						Done
					</label>
				</div>
				<div className="f-type">
					<input
						id="f-radio-3"
						type="radio"
						checked={type === 3 ? true : false}
						onChange={handleChange}
						name="radio"
						value="Not Done"
					/>
					<label className="f-label" htmlFor="f-radio-3">
						Not done
					</label>
				</div>
			</div>
		</div>
	);
};

export default Filter;
