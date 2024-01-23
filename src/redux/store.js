import { counterReducer } from './counter/slice'
import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/slice'

// export const store = createStore(rootReducer, enhancer)
export const store = configureStore({
	reducer: {
		countData: counterReducer,
		tasks: todosReducer,
	},
})
