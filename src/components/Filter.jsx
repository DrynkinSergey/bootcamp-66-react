import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../redux/todos/actions'

export const Filter = () => {
	const dispatch = useDispatch()
	const handleChangeFilter = value => {
		dispatch(changeFilter(value))
	}

	return (
		<div>
			<button onClick={() => handleChangeFilter('all')}>all</button>
			<button onClick={() => handleChangeFilter('active')}>active</button>
			<button onClick={() => handleChangeFilter('completed')}>completed</button>
		</div>
	)
}
