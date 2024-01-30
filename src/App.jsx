import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Home, Login, Register, TodoPage } from './pages'
import { Articles, Layout } from './components'
// import { TodoPage } from './pages/TodoPage'
// import { Home } from './pages/Home'
// import { Login } from './pages/Login'
// import { Register } from './pages/Register'

// import { Layout } from './components/Layout'
// import { Articles } from './components/Articles/Articles'

import { PublicRoute } from './routes/PublicRoute'
import { PrivateRoute } from './routes/PrivateRoute'

import { refreshThunk } from './redux/auth/operations'
import { selectIsRefresh } from './redux/auth/slice'
import { Yup } from './pages/Yup'

export const App = () => {
	const isRefresh = useSelector(selectIsRefresh)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return isRefresh ? (
		<div className='min-h-screen grid place-content-center'>
			<span className='loading loading-dots loading-lg scale-[3]'></span>
		</div>
	) : (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='yup' element={<Yup />} />
				<Route
					path='/articles'
					element={
						<PrivateRoute>
							<Articles />
						</PrivateRoute>
					}
				/>
				<Route
					path='todos'
					element={
						<PrivateRoute>
							<TodoPage />
						</PrivateRoute>
					}
				/>
				<Route
					path='login'
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path='register'
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>
			</Route>
		</Routes>
	)
}
