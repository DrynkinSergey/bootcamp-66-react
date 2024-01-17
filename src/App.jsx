import { Link, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home/Home'
import About from './pages/About/About'
import { Layout } from './components/Layout'
import Users from './pages/Users/Users'
import { darkTheme, lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

export const App = () => {
	const [theme, setTheme] = useState('light')
	const changeTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<Routes>
				<Route path='/' element={<Layout changeTheme={changeTheme} />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='users' element={<Users />} />
				</Route>

				<Route path='/some' element={<h1>Hello</h1>} />
			</Routes>
		</ThemeProvider>
	)
}
