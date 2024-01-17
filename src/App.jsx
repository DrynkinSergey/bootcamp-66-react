import { Link, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home/Home'
import About from './pages/About/About'
import { Layout } from './components/Layout'
import Users from './pages/Users/Users'
import { darkTheme, lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import NotFound from './pages/NotFound/NotFound'
import SingleUser from './pages/SingleUser/SingleUser'
import AboutAim from './components/NestedRoutes/AboutAim'
import AboutCompany from './components/NestedRoutes/AboutCompany'
import UsersPosts from './components/NestedRoutes/UsersPosts'

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

					<Route path='about' element={<About />}>
						<Route index element={<h2>Click on the links above</h2>} />
						<Route path='aim' element={<AboutAim />} />
						<Route path='company' element={<AboutCompany />} />
						<Route path='info' element={<h2>Info</h2>} />
					</Route>

					<Route path='users' element={<Users />} />

					<Route path='users/:userId' element={<SingleUser />}>
						<Route path='info' element={<h2>User info</h2>} />
						<Route path='posts' element={<UsersPosts />} />
					</Route>
				</Route>
				<Route path='/some' element={<h1>Hello</h1>} />

				<Route path='*' element={<NotFound />} />
				<Route path='/404' element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	)
}
