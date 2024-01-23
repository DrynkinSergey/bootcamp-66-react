import { createReducer } from '@reduxjs/toolkit'

import { decrement, increment, reset, setStep } from './actions'

const initialState = {
	step: 1,
	counter: 0,
}
export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, (state, action) => {
			state.counter += state.step
		})
		.addCase(decrement, (state, { payload }) => {
			state.counter = state.counter - state.step
		})
		.addCase(reset, (state, action) => {
			state.counter = 0
			state.step = 1
		})
		.addCase(setStep, (state, action) => {
			state.step = action.payload
		})
})
// export const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case increment.type:
// 			return {
// 				...state,
// 				counter: state.counter + state.step,
// 			}
// 		case decrement.type:
// 			return {
// 				...state,
// 				counter: state.counter - state.step,
// 			}
// 		case reset.type:
// 			return initialState

// 		case setStep.type:
// 			return {
// 				...state,
// 				step: action.payload,
// 			}

// 		default:
// 			return state
// 	}
// }
