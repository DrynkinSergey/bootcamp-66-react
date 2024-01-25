import React from 'react'
import { Card } from './Card'
import { useSelector } from 'react-redux'
import { selectArticles } from '../../redux/articles/slice'

export const List = () => {
	const data = useSelector(selectArticles)
	return (
		<ul className='grid grid-cols-3 gap-4 px-8'>
			{data.map(article => (
				<Card key={article.id} {...article} />
			))}
		</ul>
	)
}
