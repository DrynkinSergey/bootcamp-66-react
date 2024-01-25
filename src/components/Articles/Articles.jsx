import React from 'react'
import { AddForm } from './AddForm'
import { List } from './List'

export const Articles = () => {
	return (
		<>
			<AddForm />
			<div className='divider divider-primary'>Best articles ever!</div>
			<List />
		</>
	)
}
