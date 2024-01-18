import React, { Suspense } from 'react'
import { StyledLink } from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

const About = () => {
	return (
		<div>
			<h2>About our company and more...</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam repudiandae at dolorem aspernatur ducimus?
				Iure doloribus, aspernatur tempora dignissimos quae voluptates molestias nam dicta voluptatibus id tenetur
				adipisci dolore.
			</p>
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
			<Suspense fallback={<h1>Loading second suspense</h1>}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default About
