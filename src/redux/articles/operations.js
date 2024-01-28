import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:7777/'

export const fetchArticlesThunk = createAsyncThunk('fetchAll', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('articles')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const addArticleThunk = createAsyncThunk('addArticle', async (body, thunkApi) => {
	try {
		await axios.post('articles', body)
		thunkApi.dispatch(fetchArticlesThunk())
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
export const deleteArticleThunk = createAsyncThunk('addArticle', async (id, thunkApi) => {
	try {
		await axios.delete(`articles/${id}`)
		thunkApi.dispatch(fetchArticlesThunk())
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
