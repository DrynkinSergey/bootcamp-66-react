import styled from 'styled-components'

export const FlexContainer = styled.div`
	display: flex;
	gap: ${props => props.$gap || '10px'};
	flex-direction: ${props => props.$direction || 'row'};
`
