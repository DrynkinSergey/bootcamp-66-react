import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

const slice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		addArticle: (state, action) => {
			state.items.push(action.payload)
		},
		deleteArticle: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		},
	},
	selectors: {
		selectArticles: state => state.items,
	},
})

export const articlesReducer = slice.reducer
export const { addArticle, deleteArticle } = slice.actions
export const { selectArticles } = slice.selectors
