import styled from 'styled-components'

export const StyledWrapper = styled.div`
	background-color: ${props => props.bgColor || 'lightgray'};
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 500px;
	height: 700px;
	border: 1px solid black;
	padding: 10px 10px;
`
export const StyledAvatarWrapper = styled.div`
	width: 300px;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 50%;
	border: 4px solid rgb(3, 241, 153);
`
export const StyledAvatar = styled.img`
	width: 100%;
	cursor: pointer;
	transition: transform 0.5s ease;

	&:hover {
		transform: scale(1.1);
	}
`

export const StyledTitle = styled.h2`
	text-align: center;
`
export const StyledUserInfo = styled.p`
	font-weight: 700;
`
