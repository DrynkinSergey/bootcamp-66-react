import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/slice'
import { articlesReducer } from './articles/slice'
import { authReducer } from './auth/slice'
//https://goit-task-manager.herokuapp.com/
export const store = configureStore({
	reducer: {
		tasks: todosReducer,
		articles: articlesReducer,
		auth: authReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
