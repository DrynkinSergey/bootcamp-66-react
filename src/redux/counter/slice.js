import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	step: 1,
	counter: 0,
}

const slice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.counter += state.step
		},
		decrement: (state, action) => {
			state.counter -= state.step
		},
		reset: (state, action) => {
			state.counter = 0
			state.step = 1
		},
		setStep: (state, action) => {
			state.step = action.payload
		},
	},
	selectors: {
		selectCounter: state => state.counter,
		selectStep: state => state.step,
	},
})

export const counterReducer = slice.reducer
export const { increment, decrement, reset, setStep } = slice.actions
export const { selectCounter, selectStep } = slice.selectors
