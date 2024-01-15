import React, { useContext } from 'react'
import { SinglePost } from './SinglePost'
import s from './Posts.module.scss'
import { MyContext } from '../../App'
export const PostList = ({ message, items, handleOpenModal }) => {
	const { car } = useContext(MyContext)
	return (
		<ul className={s.list}>
			<h1>{message}</h1>
			<h2>{car}</h2>
			{items.map(post => (
				<SinglePost key={post.id} {...post} handleOpenModal={handleOpenModal} />
			))}
		</ul>
	)
}
