import React from 'react'
import { Todolist } from './components/Todos/Todolist'
import { Route, Routes } from 'react-router-dom'
import { TodoPage } from './pages/TodoPage'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { PublicRoute } from './routes/PublicRoute'
import { PrivateRoute } from './routes/PrivateRoute'
import { Articles } from './components/Articles/Articles'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
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
