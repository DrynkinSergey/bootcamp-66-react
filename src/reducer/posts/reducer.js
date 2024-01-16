import { actionTypes } from './actionTypes'
export const initialState = {
	items: [],
	skip: 0,
	loading: false,
	error: null,
	query: '',
	totalItems: 0,
	isOpen: false,
	modalContent: null,
}
export const postsReducer = (state, action) => {
	console.log(action)
	const { type, payload } = action
	switch (type) {
		case actionTypes.LOADING_START:
			return {
				...state,
				loading: true,
				error: null,
			}
		case actionTypes.FETCHING_DONE:
			return {
				...state,
				items: [...state.items, ...payload.posts],
				totalItems: payload.total,
			}
		case actionTypes.SET_ERROR:
			return {
				...state,
				error: payload,
			}

		case actionTypes.LOADING_END:
			return {
				...state,
				loading: false,
			}
		case actionTypes.CHANGE_QUERY:
			return {
				...state,
				query: payload,
				items: [],
				skip: 0,
			}
		case actionTypes.CHANGE_SKIP:
			return {
				...state,
				skip: state.skip + 6,
			}
		case actionTypes.TOGGLE_MODAL:
			return {
				...state,
				isOpen: !state.isOpen,
			}
		case actionTypes.OPEN_MODAL_CONTENT:
			return {
				...state,
				modalContent: payload,
				isOpen: true,
			}
		case actionTypes.NEXT_POST:
			return {
				...state,
				modalContent: payload,
			}

		default:
			return state
	}
}
