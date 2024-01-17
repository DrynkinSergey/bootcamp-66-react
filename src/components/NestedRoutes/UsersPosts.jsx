import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostsByUserId } from '../../services/api'
import Modal from '../Modal/Modal'
import { useModal } from '../../hooks/useModal'

const UsersPosts = () => {
	const { userId } = useParams()

	const { isOpen, open, close } = useModal()

	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetchPostsByUserId(userId).then(res => setPosts(res))
	}, [userId])
	return (
		<div>
			<ul>
				{posts.map(post => (
					<li onClick={open} key={post.id}>
						{post.title}
					</li>
				))}
			</ul>
			{isOpen && (
				<Modal close={close}>
					<h2>asdfadsfd</h2>
				</Modal>
			)}
		</div>
	)
}

export default UsersPosts
