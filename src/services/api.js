import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchPosts = async configParams => {
	const { data } = await axios.get('posts', {
		params: {
			limit: 100,
			...configParams,
		},
	})
	return data.posts
}

export const fetchPostById = async id => {
	const { data } = await axios.get(`posts/${id}`)
	return data
}

export const fetchPostsByQuery = async configParams => {
	const { data } = await axios.get('posts/search', {
		params: {
			...configParams,
		},
	})
	return data.posts
}

export const fetchUsers = async () => {
	const { data } = await axios.get('users')
	return data.users
}

export const fetchUserById = async id => {
	const { data } = await axios.get(`users/${id}`)
	return data
}
export const fetchPostsByUserId = async id => {
	const { data } = await axios.get(`posts/user/${id}`)
	return data.posts
}
