import React, { useState, useEffect } from 'react';

//?API
import { getTodos } from '../api/todos';

//?STYLES
import './HomePage.css';
import './_common.css';

//?COMPONENTS
import TodoForm from '../components/forms/TodoForm';
import TodoList from '../components/lists/TodoList';
import Filter from '../components/filter/Filter';
import TodosLoading from '../components/loaders/TodosLoading';
import makeToast from '../components/toaster/Toaster';
import Footer from '../components/footer/Footer';

const HomePage = () => {
	const [fetching, setFetching] = useState(false);
	const [todos, setTodos] = useState([]);
	const [filteredTodos, setFilteredTodos] = useState([]);

	const [todo, setTodo] = useState({
		_id: null,
		title: '',
		description: '',
	});
	const [updatedTodo, setUpdatedTodo] = useState(null);

	const [formState, setFormState] = useState({
		submitText: 'Create',
		cancelDisplay: 'none',
	});

	useEffect(() => {
		fetchAllTodos();
	}, []);
	useEffect(() => {
		setFilteredTodos(todos);
	}, [todos]);
	useEffect(() => {
		if (todo._id !== null) {
			setFormState({
				submitText: 'Update',
				cancelDisplay: 'block',
			});
		}
	}, [todo]);

	const fetchAllTodos = async () => {
		setFetching(true);
		const result = await getTodos();
		if (result.success) {
			setTodos(result.todos);
		}
		makeToast(result);
		setFetching(false);
	};

	return (
		<div className="HomePage page">
			{fetching && <TodosLoading loading={fetching} />}
			<TodoForm
				todo={todo}
				setTodo={setTodo}
				todos={todos}
				setTodos={setTodos}
				formState={formState}
				setFormState={setFormState}
				setUpdatedTodo={setUpdatedTodo}
			/>
			<div className="hp-group">
				<Filter
					todos={todos}
					setFilteredTodos={setFilteredTodos}
					filteredTodos={filteredTodos}
				/>
				<TodoList
					todos={filteredTodos}
					setTodo={setTodo}
					updatedTodo={updatedTodo}
					setTodos={setTodos}
				/>
			</div>

			<Footer />
		</div>
	);
};

export default HomePage;
