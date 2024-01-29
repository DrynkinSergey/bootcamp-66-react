import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../redux/auth/slice'
import { logoutThunk } from '../redux/auth/operations'

export const ProfileDetails = () => {
	const { name, email } = useSelector(selectUser)
	const dispatch = useDispatch()
	return (
		<details className='px-4'>
			<summary>{name}</summary>
			<ul className='p-2 -translate-x-8 bg-base-100 text-black rounded-t-none'>
				<li>{email}</li>
				<li>
					<button onClick={() => dispatch(logoutThunk())}>Exit</button>
				</li>
			</ul>
		</details>
	)
}
