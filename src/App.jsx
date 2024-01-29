import React from 'react'
import { Todolist } from './components/Todos/Todolist'
import { Route, Routes } from 'react-router-dom'
import { TodoPage } from './pages/TodoPage'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='todos' element={<TodoPage />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Route>
		</Routes>
	)
}
