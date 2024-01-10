import clsx from 'clsx'
import s from './Employee.module.css'
export const EmployeeCard = ({ id, name, email, bio, skills, onDeleteUser, isOpenToWork, openModalWithContent }) => {
	return (
		<li className={clsx(s.userCard, isOpenToWork ? s.green : s.red)}>
			<h3>{name}</h3>
			<h4>{email}</h4>
			<h5>{bio}</h5>
			<ul className={s.skillList}>
				{skills.map(skill => (
					<li className={s.skillLabel} key={skill}>
						{skill}
					</li>
				))}
			</ul>
			<button onClick={() => openModalWithContent({ name, bio, isOpenToWork })}>See more...</button>
			<button onClick={() => onDeleteUser(id)} className={s.btn}>
				Delete
			</button>
		</li>
	)
}
