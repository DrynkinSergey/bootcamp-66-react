import React from 'react'
import { StyledLink } from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const About = () => {
	return (
		<div>
			<h2>About our company and more...</h2>
			<div>
				<StyledLink $color='black' to='aim'>
					Show aim
				</StyledLink>{' '}
				|{' '}
				<StyledLink $color='black' to='company'>
					Show company
				</StyledLink>{' '}
				|
				<StyledLink $color='black' to='info'>
					Show info
				</StyledLink>
			</div>
			<Outlet />
		</div>
	)
}

export default About
