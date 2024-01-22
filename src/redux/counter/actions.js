import { DECREMENT, INCREMENT, RESET, SET_STEP } from './actionTypes'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })
export const setStep = newStep => ({ type: SET_STEP, payload: newStep })
