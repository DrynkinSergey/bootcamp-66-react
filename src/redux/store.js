import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/slice'

export const store = configureStore({
	reducer: {
		tasks: todosReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
