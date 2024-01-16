import React, { useContext, useState } from 'react'
import s from './Header.module.css'
import { UserContext } from '../../context/ContextProvider'
export const Header = () => {
	const [value, setValue] = useState('')
	const { login, logout, user, isLoggedIn } = useContext(UserContext)
	const handleSubmit = e => {
		e.preventDefault()
		console.log('submit')
		login(value)
		setValue('')
	}
	return (
		<header className={s.header}>
			{!isLoggedIn ? (
				<form onSubmit={handleSubmit}>
					<input value={value} onChange={e => setValue(e.target.value)} type='text' />
					<button>Login</button>
				</form>
			) : (
				<>
					<h1>{user}</h1>
					<button onClick={logout}>Exit</button>
				</>
			)}
		</header>
	)
}
