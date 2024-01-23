import { createReducer } from '@reduxjs/toolkit'
import { addTodo, changeFilter, deleteTodo, editTodo, toggleTodo } from './actions'
import { ADD_TODO, CHANGE_FILTER, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	items: [{ id: '1', title: 'Hello redux', completed: true }],
	filter: 'all',
}

export const todosReducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteTodo, (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload) //[...]
		})
		.addCase(addTodo, (state, action) => {
			state.items.push(action.payload)
		})
		.addCase(toggleTodo, (state, action) => {
			const item = state.items.find(item => item.id === action.payload)
			item.completed = !item.completed
		})
		.addCase(editTodo, (state, action) => {
			const item = state.items.find(item => item.id === action.payload.id)
			item.title = action.payload.text
		})
		.addCase(changeFilter, (state, action) => {
			state.filter = action.payload
		})
})

// export const todosReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case deleteTodo.type:
// 			return { ...state, items: state.items.filter(item => item.id !== action.payload) }
// 		case addTodo.type:
// 			return { ...state, items: [...state.items, action.payload] }

// 		case TOGGLE_TODO:
// 			return {
// 				...state,
// 				items: state.items.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}
// 		case editTodo.type:
// 			return {
// 				...state,
// 				items: state.items.map(item =>
// 					item.id === action.payload.id ? { ...item, title: action.payload.text } : item
// 				),
// 			}

// 		case changeFilter.toString():
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
