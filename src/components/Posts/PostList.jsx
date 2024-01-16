import React, { useContext } from 'react'
import { SinglePost } from './SinglePost'
import s from './Posts.module.scss'
export const PostList = ({ message, items, handleOpenModal }) => {
	return (
		<ul className={s.list}>
			<h1>{message}</h1>
			{items.map(post => (
				<SinglePost key={post.id} {...post} handleOpenModal={handleOpenModal} />
			))}
		</ul>
	)
}
