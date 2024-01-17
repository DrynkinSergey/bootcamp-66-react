import { Link, Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home/Home'
import About from './pages/About/About'
import { Layout } from './components/Layout'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
				</Route>

				<Route path='/some' element={<h1>Hello</h1>} />
			</Routes>
		</>
	)
}
