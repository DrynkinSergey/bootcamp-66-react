import React from 'react'
import s from './Posts.module.scss'
export const SinglePost = ({ title, body, id, reactions, tags, handleOpenModal }) => {
	const post = { title, body, id, reactions, tags }
	return (
		<li className={s.postCard}>
			<h3 className={s.postTitle}>{title}</h3>
			<p>{body}</p>
			<button onClick={() => handleOpenModal(post)}>Read more</button>
		</li>
	)
}
