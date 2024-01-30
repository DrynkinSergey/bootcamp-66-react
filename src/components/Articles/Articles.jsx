import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AddForm } from './AddForm'
import { List } from './List'

import { fetchArticlesThunk } from '../../redux/articles/operations'

export const Articles = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchArticlesThunk())
	}, [dispatch])
	return (
		<>
			<AddForm />
			<div className='divider divider-primary'>Best articles ever!</div>
			<List />
		</>
	)
}
