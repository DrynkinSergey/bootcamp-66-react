import { createAction } from '@reduxjs/toolkit'
import { ADD_TODO, CHANGE_FILTER, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'

export const deleteTodo = createAction('deleteTodo')
export const addTodo = createAction('addTodo')
export const toggleTodo = createAction('toggleTodo')
export const editTodo = createAction('editTodo')
export const changeFilter = createAction('changeFilter')

// export const deleteTodo = id => {
// 	return { type: DELETE_TODO, payload: id }
// }
// export const addTodo = todo => {
// 	return { type: ADD_TODO, payload: todo }
// }

// export const toggleTodo = id => {
// 	return { type: TOGGLE_TODO, payload: id }
// }
// export const editTodo = ({ text, id }) => {
// 	return { type: EDIT_TODO, payload: { text, id } }
// }
// export const changeFilter = filterValue => {
// 	return { type: CHANGE_FILTER, payload: filterValue }
// }
