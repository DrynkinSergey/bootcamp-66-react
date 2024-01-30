import { useDispatch } from 'react-redux'

import { deleteArticleThunk } from '../../redux/articles/operations'

export const Card = ({ id, title, body, author }) => {
	const dispatch = useDispatch()
	return (
		<li className='card w-full bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{body} </p>
				<span>{author}</span>
				<div className='card-actions justify-end flex gap-2'>
					<button className='btn btn-secondary'>Edit</button>
					<button className='btn btn-error' onClick={() => dispatch(deleteArticleThunk(id))}>
						Delete
					</button>
					<button className='btn btn-primary'>Read more</button>
				</div>
			</div>
		</li>
	)
}
