import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Filter } from '../Filter'
import { editTodo, selectIsLoading, setTest } from '../../redux/todos/slice'
import { addTodoThunk, deleteTodoThunk, fetchDataThunk, toggleTodoThunk } from '../../redux/todos/operations'
import { selectFilteredDataMemo, selectUncompletedTodosMemo } from '../../redux/todos/selectors'
import { Todo } from './Todo'
import { AddTodo } from './AddTodo'

export const Todolist = () => {
	const todos = useSelector(selectFilteredDataMemo)
	const uncompletedTodos = useSelector(selectUncompletedTodosMemo)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch])

	return (
		<div>
			<AddTodo />
			<hr />
			<Filter />
			<h1 className='text-center font-bold '>We have {uncompletedTodos} uncompleted todos</h1>
			<ul className='px-4 grid grid-cols-3 py-4 gap-4'>
				{todos.map(item => (
					<Todo key={item.id} {...item} />
				))}
			</ul>
		</div>
	)
}
