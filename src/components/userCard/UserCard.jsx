export const UserCard = ({ user }) => {
	const { age, lastName, firstName, email, image, phone, address } = user
	return (
		<div>
			<img src={image} alt='' />
			<h2>
				{firstName} {lastName}
			</h2>
			<p>Email: {email}</p>
			<p>Age: {age}</p>
			<p>Phone number: {phone}</p>
			<p>{address.city}</p>
			<p>{address.address}</p>
		</div>
	)
}
