import React, { Component, PureComponent, useState } from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export const ColorPicker = ({ colors }) => {
	const [currentColor, setCurrentColor] = useState('white')
	const handlePickColor = color => {
		// this.setState({ currentColor: color })
		setCurrentColor(color)
	}
	return (
		<StyledBackgroundTheme $bgColor={currentColor}>
			<h1>Now we have color: {currentColor}</h1>
			<StyledColorPalette>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor onClick={() => handlePickColor(item.color)} key={item.id}>
							{item.color}
						</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}

// export class ColorPicker extends PureComponent {
// 	// Якщо ми не передамо пропс кольорів - буде використано цей об'єкт
// 	static defaultProps = {
// 		colors: [{ id: 1, color: 'blue' }],
// 	}

// 	state = {
// 		currentColor: 'white',
// 	}

// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	return nextState.currentColor !== this.state.currentColor
// 	// }

// 	componentDidUpdate(prevProps, prevState) {
// 		console.log('Update: ', this.state.currentColor)
// 	}

// 	handlePickColor = color => {
// 		this.setState({ currentColor: color })
// 	}

// 	render() {
// 		const { colors } = this.props
// 		const { currentColor } = this.state
// 		return (
// 			<StyledBackgroundTheme $bgColor={currentColor}>
// 				<h1>Now we have color: {currentColor}</h1>
// 				<StyledColorPalette>
// 					<StyledColorsList>
// 						{colors.map(item => (
// 							<StyledColor onClick={() => this.handlePickColor(item.color)} key={item.id}>
// 								{item.color}
// 							</StyledColor>
// 						))}
// 					</StyledColorsList>
// 				</StyledColorPalette>
// 			</StyledBackgroundTheme>
// 		)
// 	}
// }

// export const ColorPicker = ({ colors = [] }) => {
// return (
// 	<StyledBackgroundTheme>
// 		<StyledColorPalette>
// 			<StyledColorsList>
// 				{colors.map(item => (
// 					<StyledColor key={item.id}>{item.color}</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// }
