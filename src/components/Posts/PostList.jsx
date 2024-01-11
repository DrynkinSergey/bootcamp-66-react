import React from 'react'
import { SinglePost } from './SinglePost'
import s from './Posts.module.scss'
export const PostList = ({ items, handleOpenModal }) => {
	return (
		<ul className={s.list}>
			{items.map(post => (
				<SinglePost key={post.id} {...post} handleOpenModal={handleOpenModal} />
			))}
		</ul>
	)
}
