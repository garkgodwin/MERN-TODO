import API from './instance';

const TODOS = '/todos';

export const getTodos = async () => {
	let result = {
		success: false,
		failure: false,
		invalid: false,
		error: false,
		message: '',
		todos: [],
	};

	await API.get(TODOS)
		.then((response) => {
			const data = response.data;
			if (data) {
				result = {
					...result,
					success: data.success,
					failure: data.failure,
					invalid: data.invalid,
					error: data.error,
					message: data.message,
					todos: data.todos,
				};
			} else {
				result = {
					...result,
					failure: true,
					message: 'System failed to fetch all todos.',
				};
			}
		})
		.catch((error) => {
			result = {
				...result,
				error: true,
				message: error.message,
			};
		});

	return result;
};
export const getTodo = async (todoId) => {
	let result = {
		success: false,
		failure: false,
		invalid: false,
		error: false,
		message: '',
		todo: null,
	};

	await API.get(TODOS + `/${todoId}`)
		.then((response) => {
			const data = response.data;
			if (data) {
				result = {
					...result,
					success: data.success,
					failure: data.failure,
					invalid: data.invalid,
					error: data.error,
					message: data.message,
					todo: data.todo,
				};
			} else {
				result = {
					...result,
					failure: true,
					message: 'System failed to fetch a todo item.',
				};
			}
		})
		.catch((error) => {
			result = {
				...result,
				error: true,
				message: error.message,
			};
		});

	return result;
};

export const createTodo = async (data) => {
	let result = {
		success: false,
		failure: false,
		invalid: false,
		error: false,
		message: '',
		todo: null,
	};

	await API.post(TODOS + '/new', { data })
		.then((response) => {
			const data = response.data;
			if (data) {
				result = {
					success: data.success,
					failure: data.failure,
					invalid: data.invalid,
					error: data.error,
					message: data.message,
					todo: data.todo,
				};
			} else {
				result = {
					...result,
					failure: true,
					message: 'System failed to create a new todo.',
				};
			}
		})
		.catch((error) => {
			result = {
				...result,
				error: true,
				message: error.message,
			};
		});

	return result;
};

export const updateTodo = async (data, updateType) => {
	let result = {
		success: false,
		failure: false,
		invalid: false,
		error: false,
		message: '',
		todo: null,
	};
	const todoId = data._id;
	await API.patch(TODOS + `/${todoId}/update`, {
		type: updateType,
		data: data,
	})
		.then((response) => {
			const data = response.data;
			if (data) {
				result = {
					success: data.success,
					failure: data.failure,
					invalid: data.invalid,
					error: data.error,
					message: data.message,
					todo: data.todo,
				};
			} else {
				result = {
					...result,
					failure: true,
					message: 'System failed to create a new todo.',
				};
			}
		})
		.catch((error) => {
			result = {
				...result,
				error: true,
				message: error.message,
			};
		});

	return result;
};

export const deleteTodo = async (todoId) => {
	let result = {
		success: false,
		failure: false,
		invalid: false,
		error: false,
		message: '',
	};

	await API.delete(TODOS + `/${todoId}/delete`)
		.then((response) => {
			const data = response.data;
			if (data) {
				result = {
					success: data.success,
					failure: data.failure,
					invalid: data.invalid,
					error: data.error,
					message: data.message,
				};
			} else {
				result = {
					...result,
					failure: true,
					message: 'System failed to delete a todo item.',
				};
			}
		})
		.catch((error) => {
			result = {
				...result,
				error: true,
				message: error.message,
			};
		});

	return result;
};
