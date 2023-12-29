import React from 'react'
import { StyledButton } from './Button.styled'

export const Button = ({ children, $bg, $border }) => {
	return (
		<StyledButton $border={$border} $bg={$bg}>
			{children}
		</StyledButton>
	)
}
