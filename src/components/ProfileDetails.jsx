import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/auth/slice'

export const ProfileDetails = () => {
	const { name, email } = useSelector(selectUser)

	return (
		<details className='px-4'>
			<summary>{name}</summary>
			<ul className='p-2 -translate-x-8 bg-base-100 text-black rounded-t-none'>
				<li>{email}</li>
				<li>
					<button>Exit</button>
				</li>
			</ul>
		</details>
	)
}
