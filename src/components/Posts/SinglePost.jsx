import React from 'react'
import s from './Posts.module.scss'
export const SinglePost = () => {
	return (
		<li className={s.postCard}>
			<h3 className={s.postTitle}>Lorem ipsum dolor sit amet.</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod tempora sit, dolor alias iste deserunt
				error quae! Recusandae deleniti distinctio dignissimos eveniet impedit cum voluptatem atque alias modi totam.
			</p>
		</li>
	)
}
