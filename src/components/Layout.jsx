import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

export const Layout = ({ changeTheme }) => {
	return (
		<Wrapper>
			<StyledHeader>
				<h1>Routing</h1>
				<button onClick={changeTheme}>Change theme</button>
				<Navbar />
			</StyledHeader>
			<StyledOutletWrapper>
				<Suspense fallback={<h1>Load page...</h1>}>
					<Outlet />
				</Suspense>
			</StyledOutletWrapper>
		</Wrapper>
	)
}
const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 0px 20px;
	font-size: 1rem;
	background-color: ${props => props.theme.colors.headerColor};
	color: ${props => props.theme.colors.headerText};
	color: white;
	align-items: center;
	transition: all 0.5s ease;
`
const StyledOutletWrapper = styled.div`
	padding: 0 15px;
	transition: all 0.5s ease;
	background-color: ${props => props.theme.colors.main};
	color: ${props => props.theme.colors.second};
	min-height: 100vh;
`
const Wrapper = styled.div``
