import React from 'react'

import { Link } from 'react-router-dom'

export const AuthDetails = () => {
	return (
		<details className='px-4'>
			<summary>Auth</summary>
			<ul className='p-2 bg-base-100 text-black rounded-t-none'>
				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<Link to='/register'>Register</Link>
				</li>
			</ul>
		</details>
	)
}
