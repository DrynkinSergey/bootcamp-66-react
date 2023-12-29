import styled from 'styled-components'

export const StyledButton = styled.button`
	background-color: ${props => props.$bg || 'white'};
	border: ${props => (props.$border ? '2px solid black' : 'none')};
	padding: 8px 12px;
`
