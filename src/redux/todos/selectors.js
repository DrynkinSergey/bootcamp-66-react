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
	console.log('Фільтрація даних відбулась')
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
	console.log('Фільтрація даних відбулась')
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
	console.log('Підрахунок невиконаних задач')
	return todos.reduce((total, todo) => (!todo.completed ? (total += 1) : total), 0)
})

export const selectUncompletedTodos = state => {
	console.log('Підрахунок невиконаних задач')
	const todos = selectTodos(state)
	return todos.reduce((total, todo) => (!todo.completed ? (total += 1) : total), 0)
}
