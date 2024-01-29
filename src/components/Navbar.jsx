import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<div className='navbar bg-blue-700 text-white font-bold'>
			<div className='flex-1'>
				<Link to='/' className='btn btn-ghost text-xl'>
					HOME | AUTH LESSON
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<NavLink to='/todos'>Todos</NavLink>
					</li>
					<li>
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
					</li>
				</ul>
			</div>
		</div>
	)
}
