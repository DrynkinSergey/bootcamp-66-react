import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchDataThunk, toggleTodoThunk } from './operations'
import { logoutThunk } from '../auth/operations'

const initialState = {
	items: [],
	filter: 'all',
	loading: false,
	error: null,
	testValue: '',
}

const slice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		setTest: (state, action) => {
			state.testValue = action.payload
		},
		editTodo: (state, { payload }) => {
			const item = state.items.find(item => item.id === payload.id)
			item.title = payload.text
		},

		changeFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchDataThunk.fulfilled, (state, action) => {
				state.items = action.payload
			})
			.addCase(logoutThunk.fulfilled, state => {
				state.items = []
			})
			.addCase(deleteTodoThunk.fulfilled, (state, action) => {
				state.items = state.items.filter(item => item.id !== action.payload.id)
			})
			.addCase(addTodoThunk.fulfilled, (state, action) => {
				state.items.push(action.payload)
			})
			.addCase(toggleTodoThunk.fulfilled, (state, action) => {
				const item = state.items.find(item => item.id === action.payload.id)
				item.completed = !item.completed
			})

			.addMatcher(
				isAnyOf(toggleTodoThunk.rejected, addTodoThunk.rejected, fetchDataThunk.rejected),
				(state, action) => {
					state.error = action.payload
				}
			)
			.addMatcher(isAnyOf(toggleTodoThunk.pending, addTodoThunk.pending, fetchDataThunk.pending), (state, action) => {
				state.loading = true
			})
			.addMatcher(
				isAnyOf(toggleTodoThunk.fulfilled, addTodoThunk.fulfilled, fetchDataThunk.fulfilled),
				(state, action) => {
					state.loading = false
				}
			)
	},
	selectors: {
		selectTodos: state => state.items,
		selectFilter: state => state.filter,
		selectIsLoading: state => state.loading,
		selectIsError: state => state.error,
	},
})

export const todosReducer = slice.reducer
export const { editTodo, changeFilter, setTest } = slice.actions
export const { selectFilter, selectTodos, selectIsLoading, selectIsError } = slice.selectors
