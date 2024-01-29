import { createSlice } from '@reduxjs/toolkit'

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
})

export const authReducer = slice.reducer
export const { selectIsLoading, selectIsLoggedIn, selectUser } = slice.selectors
