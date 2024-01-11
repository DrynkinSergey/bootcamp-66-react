import React from 'react'
import s from './Posts.module.scss'
export const SinglePost = ({ title, body }) => {
	return (
		<li className={s.postCard}>
			<h3 className={s.postTitle}>{title}</h3>
			<p>{body}</p>
		</li>
	)
}
