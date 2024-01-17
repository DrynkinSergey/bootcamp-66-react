import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { fetchUserById } from '../../services/api'
import { StyledLink } from '../../components/Navbar'

const SingleUser = () => {
	const { userId } = useParams()
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)
	useEffect(() => {
		fetchUserById(userId)
			.then(res => setUser(res))
			.catch(error => setError(error.message))
	}, [userId])

	if (error) {
		return <h1>Error...</h1>
	}
	// if (error) {
	// 	return <Navigate to='*' />
	// }
	if (!user) {
		return <h1>Loading...</h1>
	}

	return (
		<div>
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
