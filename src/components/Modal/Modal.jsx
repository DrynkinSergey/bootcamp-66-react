import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const Modal = ({ children, close }) => {
	return (
		<ModalWrapper>
			<ModalContent>
				<>
					<h1>Modal</h1>
					<hr />
				</>
				<CloseButton onClick={close}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>
	)
}

export default Modal
