import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/auth/slice'
import { Navigate, useLocation } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
	const location = useLocation()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	if (isLoggedIn) {
		return <Navigate to={location.state?.from || '/'} />
	}
	return children
}
