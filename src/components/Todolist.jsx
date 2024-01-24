import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Filter } from './Filter'
import { addTodo, deleteTodo, editTodo, selectFilter, selectTodos, toggleTodo } from '../redux/todos/slice'

export const Todolist = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(selectFilter)

	const getFilteredData = () => {
		switch (filter) {
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)
			default:
				return todos
		}
	}

	const dispatch = useDispatch()

	const { register, handleSubmit, reset } = useForm()

	const submit = data => {
		// const newTodo = { ...data, id: nanoid(), completed: false }
		dispatch(addTodo({ ...data }))
		reset()
	}

	const filteredTodos = getFilteredData()
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('title', { required: true })} type='text' />
				<button>Add todo</button>
			</form>
			<hr />
			<Filter />
			<ul>
				{filteredTodos.map(item => (
					<li key={item.id}>
						<input checked={item.completed} type='checkbox' onChange={() => dispatch(toggleTodo(item.id))} />
						<span>{item.title}</span>
						<button onClick={() => dispatch(editTodo({ text: 'REDUX THE BEST', id: item.id }))}>Edit</button>
						<button onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
