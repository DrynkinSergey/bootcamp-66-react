import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = state => state.tasks.items
export const selectFilter = state => state.tasks.filter

// export const selectA = state => state.todos
// export const selectB = state => state.todos

// export const selectSumAB = state => {
// 	const a = selectA(state) // state => state.todos
// 	const b = selectB(state)

// 	return a + b
// }

export const selectFilteredData = state => {
	const filterValue = selectFilter(state)
	const todos = selectTodos(state)
	switch (filterValue) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
}

export const selectFilteredDataMemo = createSelector([selectFilter, selectTodos], (filter, todos) => {
	switch (filter) {
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		default:
			return todos
	}
})

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
	return todos.reduce((total, todo) => (!todo.completed ? (total += 1) : total), 0)
})

export const selectUncompletedTodos = state => {
	const todos = selectTodos(state)
	return todos.reduce((total, todo) => (!todo.completed ? (total += 1) : total), 0)
}
