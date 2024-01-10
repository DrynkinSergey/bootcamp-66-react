import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { toast } from 'react-toastify'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
		test: 0,
	}

	componentDidMount() {
		console.log('Компонент змонтовано')
		toast.success('Hello, world!')
		// this.setState({ counter: 31 })
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Компонент оновився')
		if (prevState.counter !== this.state.counter) {
			toast.info('Update counter field')
			this.setState({ test: this.state.test + 1 })
		}

		if (prevState.step !== this.state.step) {
			toast.warn('Update step')
		}
		if (prevState.counter === 5) {
			toast.error('Counter equal 5')
		}
	}

	handlePlusClick = () => {
		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
	}

	handleMinusClick = () => {
		this.setState(prevState => ({ counter: prevState.counter - prevState.step }))
	}

	handleReset = () => {
		this.setState({ counter: 0, step: 1 })
	}

	render() {
		return (
			<FlexContainer>
				<StyledCounter>
					<h1>{this.state.counter}</h1>
					<input value={this.state.step} onChange={e => this.setState({ step: +e.target.value })} />
					<Flex>
						<StyledButton onClick={this.handleMinusClick}>minus</StyledButton>
						<StyledButton onClick={this.handleReset}>reset</StyledButton>
						<StyledButton onClick={this.handlePlusClick}>plus</StyledButton>
					</Flex>
				</StyledCounter>
			</FlexContainer>
		)
	}
}
