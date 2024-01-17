import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div>
			<header>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
				</nav>
			</header>
			<Outlet />
		</div>
	)
}
