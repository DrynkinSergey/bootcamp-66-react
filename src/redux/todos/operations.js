import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

// https://65b0ce3ed16d31d11bdd49df.mockapi.io/todos

axios.defaults.baseURL = 'https://65b0ce3ed16d31d11bdd49df.mockapi.io/'

export const fetchDataThunk = createAsyncThunk('todos/fetchAll', async (_, thunkAPI) => {
	try {
		const { data } = await axios.get('todos')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('todos/deleteOne', async (id, thunkAPI) => {
	try {
		const { data } = await axios.delete(`todos1/${id}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('todos/addOne', async (body, thunkAPI) => {
	try {
		const { data } = await axios.post('todos', body)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const toggleTodoThunk = createAsyncThunk('todos/toggle', async (body, thunkAPI) => {
	try {
		await axios.put(`todos/${body.id}`, { ...body, completed: !body.completed })
		return body
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

// export const fetchDataThunk = () => async dispatch => {
// 	try {
// 		dispatch(isLoading())
// 		const response = await axios.get('todos')
// 		dispatch(fetchData(response.data))
// 	} catch (error) {
// 		dispatch(isError())
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		await axios.delete(`todos/${id}`)
// 		dispatch(deleteTodo(id))
// 	} catch (error) {
// 		dispatch(isError())
// 	}
// }

// export const addTodoThunk = body => async dispatch => {
// 	try {
// 		const { data } = await axios.post('todos', body)
// 		console.log(data)
// 		dispatch(addTodo(data))
// 	} catch (error) {
// 		dispatch(isError())
// 	}
// }
