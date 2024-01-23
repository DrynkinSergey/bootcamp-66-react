import { counterReducer } from './counter/slice'
import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/slice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	// blacklist: ['filter'],
	// whitelist: ['filter'],
}
const persistConfigCounter = {
	key: 'counter',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, todosReducer)
const persistedReducerCounter = persistReducer(persistConfigCounter, counterReducer)
// export const store = createStore(rootReducer, enhancer)
export const store = configureStore({
	reducer: {
		countData: persistedReducerCounter,
		tasks: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})

export let persistor = persistStore(store)
