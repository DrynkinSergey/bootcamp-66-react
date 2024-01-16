import React, { useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { toast } from 'react-toastify'

export const Counter = () => {
	const initialState = {
		counter: 0,
		step: 1,
	}
	const counterReducer = (state, action) => {
		console.log(action)

		switch (action.type) {
			case 'INCREMENT':
				return {
					...state,
					counter: state.counter + state.step,
				}
			case 'DECREMENT':
				return {
					...state,
					counter: state.counter - state.step,
				}
			case 'RESET':
				return initialState
			case 'CHANGE_STEP':
				return {
					...state,
					step: action.payload,
				}
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(counterReducer, initialState)
	const { step, counter } = state

	const renderRef = useRef(0)
	useEffect(() => {
		renderRef.current++
		console.log('Render count:', renderRef.current)
	}, [])
	const buttonRef = useRef(null)

	const calcHardValue = step => {
		console.log('start calc')
		for (let i = 1; i < 1_000_000_000; i++) {}
		console.log('end calc')
		return 2 * step
	}

	// const result = calcHardValue()
	const result = useMemo(() => {
		return calcHardValue()
	}, [])
	const handlePlusClick = () => {
		// setCounter(prev => prev + step)
		dispatch({ type: 'INCREMENT' })
	}

	const handleMinusClick = () => {
		// setCounter(prev => prev - step)
		dispatch({ type: 'DECREMENT' })
	}

	const handleReset = () => {
		dispatch({ type: 'RESET' })
		// setCounter(0)
		// setStep(1)
	}
	return (
		<FlexContainer>
			<StyledCounter>
				<h2>Res:{result}</h2>
				<h1>{counter}</h1>
				<input value={step} onChange={e => dispatch({ type: 'CHANGE_STEP', payload: +e.target.value })} />
				<Flex>
					<StyledButton onClick={handleMinusClick}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton id='btn' ref={buttonRef} onClick={handlePlusClick}>
						plus
					</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}

// export class Counter extends React.Component {
// 	state = {
// 		counter: 0,
// 		step: 1,
// 		test: 0,
// 	}

// 	componentDidMount() {
// 		console.log('Компонент змонтовано')
// 		toast.success('Hello, world!')
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		console.log('Компонент оновився')
// 		if (prevState.counter !== this.state.counter) {
// 			toast.info('Update counter field')
// 			this.setState({ test: this.state.test + 1 })
// 		}

// 		if (prevState.step !== this.state.step) {
// 			toast.warn('Update step')
// 		}
// 		if (prevState.counter === 5) {
// 			toast.error('Counter equal 5')
// 		}
// 	}

// 	handlePlusClick = () => {
// 		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
// 	}

// 	handleMinusClick = () => {
// 		this.setState(prevState => ({ counter: prevState.counter - prevState.step }))
// 	}

// 	handleReset = () => {
// 		this.setState({ counter: 0, step: 1 })
// 	}

// 	render() {
// 		return (
// 			<FlexContainer>
// 				<StyledCounter>
// 					<h1>{this.state.counter}</h1>
// 					<input value={this.state.step} onChange={e => this.setState({ step: +e.target.value })} />
// 					<Flex>
// 						<StyledButton onClick={this.handleMinusClick}>minus</StyledButton>
// 						<StyledButton onClick={this.handleReset}>reset</StyledButton>
// 						<StyledButton onClick={this.handlePlusClick}>plus</StyledButton>
// 					</Flex>
// 				</StyledCounter>
// 			</FlexContainer>
// 		)
// 	}
// }
