import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/slice'
import { articlesReducer } from './articles/slice'
//https://goit-task-manager.herokuapp.com/
export const store = configureStore({
	reducer: {
		tasks: todosReducer,
		articles: articlesReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
