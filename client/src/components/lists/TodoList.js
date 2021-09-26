import React, { useEffect } from 'react';

//?STYLES
import './TodoList.css';

//?COMPONENTS
import Todo from './Todo';

const TodoList = ({ todos, setTodo, updatedTodo, setTodos }) => {
	return (
		<div className="TodoList">
			{todos.map((todo) => {
				if (updatedTodo !== null && updatedTodo._id === todo._id) {
					return (
						<Todo
							key={updatedTodo._id}
							todo={updatedTodo}
							setTodo={setTodo}
							setTodos={setTodos}
							todos={todos}
						/>
					);
				}
				return (
					<Todo
						key={todo._id}
						todo={todo}
						setTodo={setTodo}
						setTodos={setTodos}
						todos={todos}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;
