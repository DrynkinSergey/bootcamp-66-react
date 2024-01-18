import React, { useState } from 'react'

export const LoginWithoutRHF = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [agree, setAgree] = useState(false)
	const handleSubmit = e => {
		e.preventDefault()
		console.log({ name, email, password, agree })
		setName('')
		setEmail('')
		setPassword('')
		setAgree(false)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input placeholder='Enter  name' value={name} onChange={e => setName(e.target.value)} />
				<input placeholder='Enter  email' value={email} onChange={e => setEmail(e.target.value)} type='email' />
				<input
					placeholder='Enter  password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='password'
				/>
				<input checked={agree} onChange={() => setAgree(prev => !prev)} type='checkbox' /> I accept
				<button>Login</button>
			</form>
		</div>
	)
}
