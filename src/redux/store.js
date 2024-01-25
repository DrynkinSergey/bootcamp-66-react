import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/slice'
import { toast } from 'react-toastify'
import { articlesReducer } from './articles/slice'
// import logger from 'redux-logger'

const myLogger = store => next => action => {
	if (action?.payload?.title === 'Angular') {
		toast.warn('Angular detected!')
		action.payload.title = 'React'
		setTimeout(() => {
			toast.success('Thats allright! 👌')
		}, 2000)
		return next(action)
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		tasks: todosReducer,
		articles: articlesReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLogger),
	devTools: process.env.NODE_ENV !== 'production',
})
