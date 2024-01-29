import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/auth/slice'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const location = useLocation()
	if (!isLoggedIn) {
		return <Navigate state={{ from: location }} to='/login' />
	}
	return children
}
