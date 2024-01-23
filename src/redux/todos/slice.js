import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
	items: [{ id: '1', title: 'Hello redux', completed: true }],
	filter: 'all',
}

const slice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		deleteTodo: (state, { payload }) => {
			state.items = state.items.filter(item => item.id !== payload)
		},
		addTodo: {
			prepare: ({ title }) => {
				return {
					payload: {
						title,
						id: nanoid(),
						completed: false,
						createdAt: new Date().toLocaleTimeString(),
					},
				}
			},
			reducer: (state, { payload }) => {
				state.items.push(payload)
			},
		},
		editTodo: (state, { payload }) => {
			const item = state.items.find(item => item.id === payload.id)
			item.title = payload.text
		},
		toggleTodo: (state, { payload }) => {
			const item = state.items.find(item => item.id === payload)
			item.completed = !item.completed
		},
		changeFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	selectors: {
		selectTodos: state => state.items,
		selectFilter: state => state.filter,
	},
})

export const todosReducer = slice.reducer
export const { addTodo, deleteTodo, editTodo, toggleTodo, changeFilter } = slice.actions
export const { selectFilter, selectTodos } = slice.selectors
