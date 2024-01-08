import React, { Component } from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export class ColorPicker extends Component {
	// Якщо ми не передамо пропс кольорів - буде використано цей об'єкт
	static defaultProps = {
		colors: [{ id: 1, color: 'blue' }],
	}

	state = {
		currentColor: 'white',
	}

	handlePickColor = color => {
		this.setState({ currentColor: color })
	}

	render() {
		const { colors } = this.props
		const { currentColor } = this.state
		return (
			<StyledBackgroundTheme $bgColor={currentColor}>
				<h1>Now we have color: {currentColor}</h1>
				<StyledColorPalette>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor onClick={() => this.handlePickColor(item.color)} key={item.id}>
								{item.color}
							</StyledColor>
						))}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}

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
