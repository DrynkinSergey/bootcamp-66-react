import { Link, Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchUserById } from '../../services/api'
import { StyledLink } from '../../components/Navbar'
import { useHttp } from '../../hooks/useHttp'
import { useRef } from 'react'

const SingleUser = () => {
	const { userId } = useParams()
	const { data: user, setData: setUser, error } = useHttp(fetchUserById, userId)
	const navigate = useNavigate()
	const location = useLocation()
	// const path = location.state.from.pathname
	// const query = location.state.from.search
	const goBackLink = useRef(location.state?.from || '/users')

	const handleBackButtonClick = () => {
		// navigate('/users')
		// navigate(-1)
		navigate(goBackLink.current)
	}

	if (error) {
		return <h1>Error...</h1>
	}

	if (!user) {
		return <h1>Loading...</h1>
	}

	return (
		<div>
			<Link to={goBackLink.current}>Go back link</Link>

			<button onClick={handleBackButtonClick}>Go back</button>
			<img src={user.image} alt={user.firstName} />
			<h2>
				{user.firstName} {user.lastName}
			</h2>
			<p>Email: {user.email}</p>

			<p>Age: {user.age}</p>
			<p>Gender: {user.gender}</p>
			<p>Address: {user.address.address}</p>
			<button onClick={() => setUser({ ...user, email: 'test@mail.com' })}>Change email</button>
			<div style={{ display: 'flex' }}>
				<nav>
					{' '}
					<StyledLink $color='black' to='info'>
						Show user info
					</StyledLink>
					<StyledLink $color='black' to='posts'>
						Show user posts
					</StyledLink>
				</nav>
			</div>
			<Outlet />
		</div>
	)
}

export default SingleUser
