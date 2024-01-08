import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
	}

	handlePlusClick = () => {
		// this.state.counter = 2 - Не можна напраму змінювати стейт!!!

		// Відображення в консолі теперішнього стану лічильника за допомоги колбека як другого аргумента!
		// this.setState({ counter: this.state.counter + 1 }, () => console.log(this.state.counter))

		// this.setState({ counter: this.state.counter + 1 })
		// this.setState({ counter: this.state.counter + 1 })
		// this.setState({ counter: this.state.counter + 1 })

		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
	}

	handleMinusClick = () => {
		// this.setState({ counter: this.state.counter - 1 })
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

// export const Counter = () => {
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1>{0}</h1>
// 			<Flex>
// 				<StyledButton>minus</StyledButton>
// 				<StyledButton>reset</StyledButton>
// 				<StyledButton>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// }
