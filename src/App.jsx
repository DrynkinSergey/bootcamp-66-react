import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home/Home'
// import About from './pages/About/About'
import { Layout } from './components/Layout'
// import Users from './pages/Users/Users'
import { darkTheme, lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { lazy, useState } from 'react'
import NotFound from './pages/NotFound/NotFound'
import SingleUser from './pages/SingleUser/SingleUser'
// import AboutAim from './components/NestedRoutes/AboutAim'
// import AboutCompany from './components/NestedRoutes/AboutCompany'
import UsersPosts from './components/NestedRoutes/UsersPosts'
import Posts from './pages/Posts/Posts'
import SinglePost from './pages/SinglePost/SinglePost'
import { Login } from './pages/Login/Login'
import { LoginWithoutRHF } from './pages/Login/LoginWithoutRHF'

const About = lazy(() => import('./pages/About/About'))
const Users = lazy(() => import('./pages/Users/Users'))
const AboutAim = lazy(() => import('./components/NestedRoutes/AboutAim'))
const AboutCompany = lazy(() => import('./components/NestedRoutes/AboutCompany'))

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
					<Route path='posts' element={<Posts />} />
					<Route path='posts/:postId' element={<SinglePost />} />

					<Route path='users/:userId' element={<SingleUser />}>
						<Route path='info' element={<h2>User info</h2>} />
						<Route path='posts' element={<UsersPosts />} />
					</Route>
				</Route>
				<Route path='/some' element={<h1>Hello</h1>} />

				<Route path='*' element={<NotFound />} />
				<Route path='/login' element={<Login />} />
				{/* <Route path='/login' element={<LoginWithoutRHF />} /> */}
				<Route path='/about-us' element={<Navigate to='/about' />} />
				<Route path='/404' element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	)
}
