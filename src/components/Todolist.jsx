import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Filter } from './Filter'
import { editTodo, selectIsLoading, setTest } from '../redux/todos/slice'
import { addTodoThunk, deleteTodoThunk, fetchDataThunk, toggleTodoThunk } from '../redux/todos/operations'
import { selectFilter, selectFilteredDataMemo, selectUncompletedTodosMemo } from '../redux/todos/selectors'

export const Todolist = () => {
	const todos = useSelector(selectFilteredDataMemo)
	const filter = useSelector(selectFilter)
	const uncompletedTodos = useSelector(selectUncompletedTodosMemo)
	const loading = useSelector(selectIsLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch])

	const { register, handleSubmit, reset } = useForm()

	const submit = data => {
		dispatch(addTodoThunk(data))
		reset()
	}

	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('title', { required: true })} type='text' />
				<button>Add todo</button>
			</form>
			<hr />
			<input type='text' onChange={e => dispatch(setTest(e.target.value))} />
			<Filter />
			<h1>We have {uncompletedTodos} uncompleted todos</h1>
			<ul>
				{todos.map(item => (
					<li key={item.id}>
						<input checked={item.completed} type='checkbox' onChange={() => dispatch(toggleTodoThunk(item))} />
						<span>{item.title}</span>
						<button onClick={() => dispatch(editTodo({ text: 'REDUX THE BEST', id: item.id }))}>Edit</button>
						<button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
					</li>
				))}
			</ul>
			{loading && <h1>Loading...</h1>}
		</div>
	)
}
