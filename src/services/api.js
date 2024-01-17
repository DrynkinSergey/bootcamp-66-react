import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchPosts = async configParams => {
	const { data } = await axios.get('posts', {
		params: {
			...configParams,
		},
	})
	return data
}

export const fetchPostsByQuery = async configParams => {
	const { data } = await axios.get('posts/search', {
		params: {
			...configParams,
		},
	})
	return data
}

export const fetchUsers = async () => {
	const { data } = await axios.get('users')
	return data.users
}
