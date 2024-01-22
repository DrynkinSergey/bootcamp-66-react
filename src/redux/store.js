import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { todosReducer } from './todos/reducer'

const enhancer = devToolsEnhancer()
//state.counter
//state.counter.counter
//state.counter.step
//state.todos.items
//state.todos.filter
const rootReducer = combineReducers({
	countData: counterReducer,
	todos: todosReducer,
})

export const store = createStore(rootReducer, enhancer)
