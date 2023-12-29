import clsx from 'clsx'
import s from './UserCard.module.css'
export const UserCard = ({ user }) => {
	const { age, lastName, firstName, email, image, phone, address } = user
	return (
		<div className={s.userCard}>
			<div className={s.avatarWrapper}>
				<img className={s.avatar} src={image} alt='' />
			</div>
			<h2 className={s.title}>
				{firstName} {lastName}
			</h2>
			<p className={s.userInfo}>Email: {email}</p>
			{/* <p className={`${s.userInfo} ${age >= 50 ? s.textRed : s.textGreen}`}>Age: {age}</p> */}
			<p
				className={clsx(s.userInfo, {
					[s.textRed]: age >= 50,
					[s.textGreen]: age <= 49,
				})}
			>
				Age: {age}
			</p>

			<p>Phone number: {phone}</p>
			<p>{address.city}</p>
			<p>{address.address}</p>
		</div>
	)
}
