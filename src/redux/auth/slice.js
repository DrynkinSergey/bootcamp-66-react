import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: null,
	isLoggedIn: false,
	isLoading: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		selectIsLoggedIn: state => state.isLoggedIn,
		selectIsLoading: state => state.isLoading,
		selectUser: state => state.user,
	},
	extraReducers: builder => {
		builder

			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, (state, { payload }) => {
				return initialState
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.name
				state.user.email = payload.email
				state.isLoggedIn = true
			})
	},
})

export const authReducer = slice.reducer
export const { selectIsLoading, selectIsLoggedIn, selectUser } = slice.selectors
