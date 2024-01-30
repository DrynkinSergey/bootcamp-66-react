import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { ProfileDetails } from './ProfileDetails'
import { AuthDetails } from './AuthDetails'
import { selectIsLoggedIn } from '../redux/auth'

export const Navbar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
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
						<NavLink to='/articles'>Articles</NavLink>
					</li>
					<li>
						<NavLink to='/yup'>Yup</NavLink>
					</li>
					<li>
						<NavLink to='/todos'>Todos</NavLink>
					</li>
					<li>{isLoggedIn ? <ProfileDetails /> : <AuthDetails />}</li>
				</ul>
			</div>
		</div>
	)
}
