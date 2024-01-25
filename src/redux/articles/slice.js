import { createSlice } from '@reduxjs/toolkit'
import { addArticleThunk, fetchArticlesThunk } from './operations'

const initialState = {
	items: [],
}

const slice = createSlice({
	name: 'articles',
	initialState,

	extraReducers: builder => {
		builder.addCase(fetchArticlesThunk.fulfilled, (state, action) => {
			state.items = action.payload
		})
		// .addCase(addArticleThunk.fulfilled, (state, action) => {
		// 	state.items.push(action.payload)
		// })
	},
	selectors: {
		selectArticles: state => state.items,
	},
})

export const articlesReducer = slice.reducer
export const { selectArticles } = slice.selectors
