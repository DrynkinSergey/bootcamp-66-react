import clsx from 'clsx'
import s from './UserCard.module.css'
import { StyledAvatar, StyledAvatarWrapper, StyledTitle, StyledUserInfo, StyledWrapper } from './UserCard.styled'

export const UserCardStyled = ({ user }) => {
	const { age, lastName, firstName, email, image, phone, address } = user
	return (
		<StyledWrapper>
			<StyledAvatarWrapper>
				<StyledAvatar src={image} alt='' />
			</StyledAvatarWrapper>

			<StyledTitle>
				{firstName} {lastName}
			</StyledTitle>

			<StyledUserInfo>Email: {email}</StyledUserInfo>
			<StyledUserInfo>Age: {age}</StyledUserInfo>

			<p>Phone number: {phone}</p>
			<p>{address.city}</p>
			<p>{address.address}</p>
		</StyledWrapper>
	)
}
