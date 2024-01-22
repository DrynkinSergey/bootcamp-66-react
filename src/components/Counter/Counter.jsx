import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { decrement, increment, reset, setStep } from './../../redux/counter/actions'
export const Counter = () => {
	const counter = useSelector(state => state.counter)
	const step = useSelector(state => state.step)

	const dispatch = useDispatch()

	const handlePlusClick = () => {
		dispatch(increment())
	}

	const handleMinusClick = () => {
		// dispatch({ type: DECREMENT })
		dispatch(decrement())
	}

	const handleReset = () => {
		dispatch(reset())
	}

	const handleChangeStep = e => {
		// dispatch({ type: SET_STEP, payload: +e.target.value })
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
