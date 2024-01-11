import React from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends React.Component {
	timeoutID = null
	intervalID = null

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)

		// this.timeoutID = setTimeout(() => {
		// 	console.log('Badabum!')
		// }, 3000)

		// this.intervalID = setInterval(() => {
		// 	console.log(new Date().toLocaleTimeString())
		// }, 1000)
	}

	componentWillUnmount() {
		console.log('Modal was closed')
		// Знімаємо натискання на клавіши
		document.removeEventListener('keydown', this.handleKeyDown)

		// Знімаємо інтервал та таймаут
		clearTimeout(this.timeoutID)
		clearInterval(this.intervalID)
	}

	handleClickOnBackdrop = e => {
		// console.log('current target =>> ', e.currentTarget)
		// console.log('target =>> ', e.target)
		// this.props.close()
		if (e.currentTarget === e.target) {
			this.props.close()
		}
	}

	handleKeyDown = e => {
		console.log(e.key)
		if (e.key === 'Escape') {
			this.props.close()
		}
	}

	render() {
		const { close, children, title = 'Modal' } = this.props
		return (
			<ModalWrapper onClick={this.handleClickOnBackdrop}>
				<ModalContent>
					<>
						<h1>{title}</h1>
						<hr />
					</>
					<CloseButton onClick={close}>×</CloseButton>
					{children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}
// const Modal = ({ children, close }) => {
// return (
// 	<ModalWrapper>
// 		<ModalContent>
// 			<>
// 				<h1>Modal</h1>
// 				<hr />
// 			</>
// 			<CloseButton onClick={close}>×</CloseButton>
// 			{children}
// 		</ModalContent>
// 	</ModalWrapper>
// )
// }

export default Modal
