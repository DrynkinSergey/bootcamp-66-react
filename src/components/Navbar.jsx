import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
	return (
		<NavMenu>
			<StyledLink to='/'>Home</StyledLink>
			<StyledLink to='/about'>About</StyledLink>
			<StyledLink to='/users'>Users</StyledLink>
			<StyledLink to='/posts'>Posts</StyledLink>
		</NavMenu>
	)
}

const NavMenu = styled.nav`
	display: flex;
	gap: 20px;
`
export const StyledLink = styled(NavLink)`
	color: ${props => props.$color || 'white'};
	font-size: calc((1vh + 1vw) * 1.5);
	font-weight: bold;
	text-decoration: none;
	&.active {
		color: black;
	}
	&:hover:not(.active) {
		color: red;
	}
`

export default Navbar
