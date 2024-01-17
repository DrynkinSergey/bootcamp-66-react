import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { useModal } from '../../hooks/useModal'

export const Home = () => {
	const { isOpen, open, close } = useModal()
	const { isOpen: modal2Open, open: open2, close: close2 } = useModal()
	return (
		<div>
			<h1>Home page</h1>
			<button onClick={open}>Open modal</button>
			<button onClick={open2}>Open modal</button>
			{isOpen && (
				<Modal close={close}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt aut iure numquam delectus,
					veniam temporibus a voluptate quasi! Repudiandae doloremque tenetur aspernatur quo quidem. Fugit deserunt quia
					facilis voluptate? Tenetur in maiores at voluptas vel est repudiandae recusandae corrupti assumenda
					perspiciatis, soluta pariatur maxime voluptate blanditiis cupiditate similique a rerum consequuntur placeat
					voluptates officiis nihil neque! Architecto, explicabo ut!
				</Modal>
			)}
			{modal2Open && <Modal close={close2}>Продам холодильник</Modal>}
		</div>
	)
}
