import { DECREMENT, INCREMENT, RESET, SET_STEP } from './actionTypes'

const initialState = {
	step: 1,
	counter: 0,
}
export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + state.step,
			}
		case DECREMENT:
			return {
				...state,
				counter: state.counter - state.step,
			}
		case RESET:
			return initialState

		case SET_STEP:
			return {
				...state,
				step: action.payload,
			}

		default:
			return state
	}
}
