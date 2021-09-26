import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ScaleLoader from 'react-spinners/ScaleLoader';

//?API
import { getTodo, deleteTodo, updateTodo } from '../../api/todos';

//?STYLES
import './Todo.css';

//?COMPONENTS
import UpdateButton from '../buttons/UpdateButton';
import DeleteButton from '../buttons/DeleteButton';
import makeToast from '../toaster/Toaster';

const formatDate = (dateFromAPI) => {
	const d1 = new Date(dateFromAPI);
	const formatted = moment(d1, 'YYYYMMDD').fromNow();
	return formatted;
};

const Todo = ({ todo, setTodo, setTodos, todos }) => {
	const todoId = todo._id;
	const [completed, setCompleted] = useState(todo.completed);
	const [cName, setCName] = useState({
		todo: 'Todo',
		description: 't-description',
		title: 't-title',
		date: 't-date',
		status: 't-status',
	});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (completed) {
			setCName({
				todo: 'Todo completed',
				description: 't-description completed',
				title: 't-title completed',
				date: 't-date completed',
				status: 't-status completed',
			});
		} else {
			setCName({
				todo: 'Todo',
				description: 't-description',
				title: 't-title',
				date: 't-date',
				status: 't-status',
			});
		}
		// eslint-disable-next-line
	}, [completed]);

	const handleCompletion = async (e) => {
		console.log(todo);
		const data = {
			_id: todoId,
			completed: !completed,
		};
		setLoading(true);
		const result = await updateTodo(data, 2);
		makeToast(result);
		if (result.success) {
			setCompleted(!completed);
		}
		setLoading(false);
	};
	const handleUpdate = async (e) => {
		e.stopPropagation();
		e.preventDefault();
		if (todoId) {
			const result = await getTodo(todoId);
			if (result.success) {
				const todo = result.todo;
				setTodo({
					_id: todo._id,
					title: todo.title,
					description: todo.description,
				});
			}
		}
	};
	const handleDelete = async (e) => {
		e.stopPropagation();
		e.preventDefault();
		setLoading(true);
		const result = await deleteTodo(todoId);
		makeToast(result);
		if (result.success) {
			/*
				if delete successfully,
				remove it from the todos state array
			*/
			const filteredTodos = todos.filter((todo) => {
				return todo._id !== todoId;
			});
			setTodos(filteredTodos);
		}
		setLoading(false);
	};
	return (
		<div className={cName.todo} onClick={handleCompletion}>
			{loading && (
				<div className="t-loading">
					<ScaleLoader
						height={50}
						width={4}
						loading={loading}
						color="red"
					/>
				</div>
			)}
			<p className={cName.date + ' created-date'}>
				Created {formatDate(todo.createdAt)}
			</p>
			<h1 className={cName.title}>{todo.title}</h1>
			<hr />
			<div className={cName.description}>
				<span>DESCRIPTION</span>
				<p>{todo.description}</p>
			</div>
			<div className="t-actions">
				<p className={cName.date + ' updated-date'}>
					Updated {formatDate(todo.updatedAt)}
				</p>
				<div className="t-buttons">
					<UpdateButton text="Update" handleClick={handleUpdate} />
					<DeleteButton text="Delete" handleClick={handleDelete} />
				</div>
			</div>
		</div>
	);
};

export default Todo;
