import React, { useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { toast } from 'react-toastify'
import axios from 'axios'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)
	const handlePlusClick = () => {
		// this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
		setCounter(prev => prev + step)
	}

	const handleMinusClick = () => {
		// this.setState(prevState => ({ counter: prevState.counter - prevState.step }))
		setCounter(prev => prev - step)
	}

	const handleReset = () => {
		// this.setState({ counter: 0, step: 1 })
		setCounter(0)
		setStep(1)
	}
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>
				<input value={step} onChange={e => setStep(+e.target.value)} />
				<Flex>
					<StyledButton onClick={handleMinusClick}>minus</StyledButton>
					<StyledButton onClick={handleReset}>reset</StyledButton>
					<StyledButton onClick={handlePlusClick}>plus</StyledButton>
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
