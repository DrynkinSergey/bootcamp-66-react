import { EmployeeCard } from './EmployeeCard'
import s from './Employee.module.css'

export const EmployeeList = ({ users = [], onDeleteUser, openModalWithContent }) => {
	if (!users.length) {
		return <h1>Немає юзерів для роботи</h1>
	}

	return (
		<ul className={s.userList}>
			{users.map(user => (
				<EmployeeCard key={user.id} {...user} onDeleteUser={onDeleteUser} openModalWithContent={openModalWithContent} />
			))}
		</ul>
	)
}
