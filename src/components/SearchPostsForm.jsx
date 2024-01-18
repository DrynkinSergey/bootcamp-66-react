import React, { useState } from 'react'

export const SearchPostsForm = ({ handleSetQuery }) => {
	const [query, setQuery] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		handleSetQuery(query)
		setQuery('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<input value={query} onChange={e => setQuery(e.target.value)} type='text' />
			<button>Search</button>
		</form>
	)
}
