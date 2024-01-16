// action creator

import { actionTypes } from './actionTypes'

export const changeSkip = () => {
	return { type: actionTypes.CHANGE_SKIP }
}
export const toggleModal = () => {
	return { type: actionTypes.TOGGLE_MODAL }
}
export const openModalContent = content => {
	return { type: actionTypes.OPEN_MODAL_CONTENT, payload: content }
}
export const nextPost = post => {
	return { type: actionTypes.NEXT_POST, payload: post }
}

export const actions = {
	changeSkip,
	toggleModal,
}
