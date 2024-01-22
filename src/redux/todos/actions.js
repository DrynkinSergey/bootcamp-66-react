import { ADD_TODO, CHANGE_FILTER, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'

export const deleteTodo = id => {
	return { type: DELETE_TODO, payload: id }
}
export const addTodo = todo => {
	return { type: ADD_TODO, payload: todo }
}

export const toggleTodo = id => {
	return { type: TOGGLE_TODO, payload: id }
}
export const editTodo = ({ text, id }) => {
	return { type: EDIT_TODO, payload: { text, id } }
}
export const changeFilter = filterValue => {
	return { type: CHANGE_FILTER, payload: filterValue }
}
