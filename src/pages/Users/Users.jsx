import { fetchUsers } from '../../services/api'
import { Link, useLocation } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'

const Users = () => {
	const { data: users, error } = useHttp(fetchUsers)
	// home/tech/phones/samsung?name=12asdfaerwaffdsf
	const location = useLocation()
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users?.map(user => (
					<li key={user.id}>
						<Link state={{ from: location }} to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
