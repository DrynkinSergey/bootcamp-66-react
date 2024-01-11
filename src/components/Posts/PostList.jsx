import React from 'react'
import { SinglePost } from './SinglePost'
import s from './Posts.module.scss'
export const PostList = () => {
	return (
		<ul className={s.list}>
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
			<SinglePost />
		</ul>
	)
}
