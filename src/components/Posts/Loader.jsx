import React from 'react'
import { Comment } from 'react-loader-spinner'
import s from './Posts.module.scss'
export const Loader = () => {
	return (
		<div className={s.loader}>
			<Comment
				visible={true}
				height='180'
				width='180'
				ariaLabel='comment-loading'
				wrapperStyle={{}}
				wrapperClass='comment-wrapper'
				color='#fff'
				backgroundColor='#F4442E'
			/>
		</div>
	)
}
