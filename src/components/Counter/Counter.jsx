import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { actions, decrement, increment, reset, setStep } from './../../redux/counter/actions'
import { selectCounter, selectStep } from '../../redux/counter/selectors'
export const Counter = () => {
	const counter = useSelector(selectCounter)
	const step = useSelector(selectStep)

	const dispatch = useDispatch()

	const handlePlusClick = () => {
		dispatch(actions.increment())
	}

	const handleMinusClick = () => {
		dispatch(decrement())
	}

	const handleReset = () => {
		dispatch(reset())
	}

	const handleChangeStep = e => {
		dispatch(setStep(+e.target.value))
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' value={step} onChange={handleChangeStep} />
				<Flex>
					<StyledButton onClick={handleMinusClick}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handlePlusClick}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
