import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './todos/slice'
import { articlesReducer } from './articles/slice'
import { authReducer } from './auth/slice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
	reducer: {
		tasks: todosReducer,
		articles: articlesReducer,
		auth: persistedReducer,
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
