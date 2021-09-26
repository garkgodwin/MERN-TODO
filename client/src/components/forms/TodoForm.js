import React, { useEffect, useState } from 'react';

//?API
import { createTodo, updateTodo } from '../../api/todos';

//?STYLES
import './TodoForm.css';

//?IMAGES
import { ReactComponent as Up } from '../../images/scroll-up.svg';
import { ReactComponent as Down } from '../../images/scroll-down.svg';

//?COMPONENTS
import PrimaryButton from '../buttons/PrimaryButton';
import FormGroup1 from './FormGroup1';
import FormGroup2 from './FormGroup2';

import makeToast from '../toaster/Toaster';
import CancelButton from '../buttons/CancelButton';

const TodoForm = ({
	todo = null,
	setTodo,
	setTodos,
	todos,
	formState,
	setFormState,
	setUpdatedTodo,
}) => {
	const [cName, setCName] = useState({
		form: 'TodoForm',
		up: 'arrow arrow-up shown',
		down: 'arrow arrow-down hidden',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		let result = null;
		if (todo._id === null) {
			//?create
			result = await createTodo(todo);
			if (result.success) {
				setTodos([...todos, result.todo]);
				setTodo({
					_id: null,
					title: '',
					description: '',
				});
			}
		} else {
			//?update
			setUpdatedTodo(null);
			result = await updateTodo(todo, 1); //?update type 1 = updates title and description
			if (result.success) {
				setUpdatedTodo(result.todo);
				setTodo({
					_id: null,
					title: '',
					description: '',
				});
			}
		}
		makeToast(result);
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setTodo({
			_id: null,
			title: '',
			description: '',
		});
		setFormState({
			submitText: 'Create',
			cancelDisplay: 'none',
		});
	};

	const cancelStyle = {
		display: formState.cancelDisplay,
	};

	const handleUpClick = () => {
		setCName({
			...cName,
			form: 'TodoForm hidden',
			up: 'arrow arrow-up hidden',
			down: 'arrow arrow-down shown',
		});
	};
	const handleDownClick = () => {
		setCName({
			...cName,
			form: 'TodoForm',
			up: 'arrow arrow-up shown',
			down: 'arrow arrow-down hidden',
		});
	};
	return (
		<div className={cName.form}>
			<form onSubmit={handleSubmit} className="tf-form">
				<FormGroup1
					label="Title"
					placeholder="...todo title"
					details={todo}
					setDetails={setTodo}
				/>
				<FormGroup2
					label="Description"
					placeholder="...todo description."
					details={todo}
					setDetails={setTodo}
				/>
				<div className="tf-buttons">
					<CancelButton
						text="Cancel"
						handleCancel={handleCancel}
						cancelStyle={cancelStyle}
					/>
					<PrimaryButton text={formState.submitText} />
				</div>
			</form>

			<div className="arrows">
				<Up className={cName.up} onClick={handleUpClick} />
				<Down className={cName.down} onClick={handleDownClick} />
			</div>
		</div>
	);
};

export default TodoForm;
