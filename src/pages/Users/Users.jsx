import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/api'
import { Link } from 'react-router-dom'

const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetchUsers().then(res => setUsers(res))
	}, [])
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<Link to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
