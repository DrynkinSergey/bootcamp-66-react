import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: false,
	isRefresh: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		selectIsRefresh: state => state.isRefresh,
		selectIsLoggedIn: state => state.isLoggedIn,
		selectIsLoading: state => state.isLoading,
		selectUser: state => state.user,
		selectIsError: state => state.error,
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
				state.isRefresh = false
			})
			.addCase(refreshThunk.pending, state => {
				state.isRefresh = true
			})
			.addCase(refreshThunk.rejected, state => {
				state.isRefresh = false
			})
			.addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected), state => {
				state.error = true
			})
			.addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), state => {
				state.error = false
			})
	},
})

export const authReducer = slice.reducer
export const { selectIsLoading, selectIsLoggedIn, selectUser, selectIsError, selectIsRefresh } = slice.selectors
