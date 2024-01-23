import { createAction } from '@reduxjs/toolkit'

// export const increment = () => ({ type: INCREMENT })
// export const decrement = () => ({ type: DECREMENT })
// export const reset = () => ({ type: RESET })
// export const setStep = newStep => ({ type: SET_STEP, payload: newStep })

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const setStep = createAction('setStep')

export const actions = {
	increment,
	decrement,
	reset,
	setStep,
}
// console.log(increment)
// console.log(increment())
// console.log(increment('test'))
