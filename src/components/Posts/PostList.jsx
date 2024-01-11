import React from 'react'
import { SinglePost } from './SinglePost'
import s from './Posts.module.scss'
export const PostList = ({ items }) => {
	return (
		<ul className={s.list}>
			{items.map(post => (
				<SinglePost key={post.id} {...post} />
			))}
		</ul>
	)
}
