import { ADD_TODO, CHANGE_FILTER, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	items: [{ id: '1', title: 'Hello redux', completed: true }],
	filter: 'all',
}

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_TODO:
			return { ...state, items: state.items.filter(item => item.id !== action.payload) }
		case ADD_TODO:
			return { ...state, items: [...state.items, action.payload] }

		case TOGGLE_TODO:
			return {
				...state,
				items: state.items.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		case EDIT_TODO:
			return {
				...state,
				items: state.items.map(item =>
					item.id === action.payload.id ? { ...item, title: action.payload.text } : item
				),
			}

		case CHANGE_FILTER:
			return {
				...state,
				filter: action.payload,
			}
		default:
			return state
	}
}
