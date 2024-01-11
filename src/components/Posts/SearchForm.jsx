import React from 'react'
import s from './Posts.module.scss'
export const SearchForm = () => {
	return (
		<div className={s.formWrapper}>
			<form className={s.form}>
				<input type='text' />
				<button>Search</button>
			</form>
		</div>
	)
}
