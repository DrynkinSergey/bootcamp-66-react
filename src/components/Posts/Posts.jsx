import React, { Component, useEffect, useState } from 'react'
import { SearchForm } from './SearchForm'
import { PostList } from './PostList'
import s from './Posts.module.scss'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Loader } from './Loader'
import { toast } from 'react-toastify'
import Modal from '../Modal/Modal'

const Posts = ({ message }) => {
	const [items, setItems] = useState([])
	const [skip, setSkip] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [query, setQuery] = useState('')
	const [totalItems, setTotalItems] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState(null)

	useEffect(() => {
		const getData = async () => {
			try {
				// this.setState({ loading: true, error: null })
				setLoading(true)
				setError(null)
				const { posts, total } = query
					? await fetchPostsByQuery({ limit: 6, skip, q: query })
					: await fetchPosts({ limit: 6, skip })
				// this.setState(prev => ({ items: [...prev.items, ...posts], totalItems: total }))
				setItems(prev => [...prev, ...posts])
				setTotalItems(total)
			} catch (error) {
				// this.setState({ error })
				setError(error)
			} finally {
				setLoading(false)
				// this.setState({ loading: false })
			}
		}
		getData()
		;(() => {
			console.log('a + b')
		})() // IIFE
	}, [query, skip])

	const handleSetQuery = query => {
		// this.setState({ query, items: [], skip: 0 })
		setQuery(query)
		setItems([])
		setSkip(0)
	}

	const handleLoadMore = () => {
		// this.setState(prev => ({ skip: prev.skip + 6 }))
		setSkip(prev => prev + 6)
	}

	const handleToggleModal = () => {
		// this.setState(prev => ({ isOpen: !prev.isOpen }))
		setIsOpen(prev => !prev)
	}

	const handleOpenModal = content => {
		setModalContent(content)
		setIsOpen(true)
		// this.setState({ modalContent: content, isOpen: true })
	}
	const handleNextPost = id => {
		const item = items.findIndex(post => post.id === id)
		if (item === items.length - 1) {
			setModalContent(items[0])
		} else {
			setModalContent(items[item + 1])
		}
	}
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>Post LIST</h1>
			<SearchForm setQuery={handleSetQuery} />

			<PostList message={message} handleOpenModal={handleOpenModal} items={items} />

			{loading && <Loader />}

			{error && <h2>Smth went wrong!!</h2>}

			{items.length && items.length < totalItems ? (
				<button onClick={handleLoadMore} className={s.loadBtn}>
					Load more
				</button>
			) : null}
			{isOpen ? (
				<Modal close={handleToggleModal}>
					<h1>{modalContent.title}</h1>
					<p>{modalContent.body}</p>
					<span>{modalContent.reactions}</span>
					<div>
						{modalContent.tags.map(tag => (
							<span key={tag}> {tag} </span>
						))}
					</div>
					<button onClick={() => handleNextPost(modalContent.id)}>Next Post</button>
				</Modal>
			) : null}
		</div>
	)
}

// export default class Posts extends Component {
// 	state = {
// 		items: [],
// 		skip: 0,
// 		loading: false,
// 		error: null,
// 		query: '',
// 		totalItems: 0,
// 		isOpen: false,
// 		modalContent: null,
// 	}

// 	async componentDidMount() {
// 		try {
// 			this.setState({ loading: true, error: null })
// 			const { posts, total } = await fetchPosts({ limit: 6 })
// 			toast.success(`We have ${total} posts!`)
// 			this.setState({ items: posts, totalItems: total })
// 		} catch (error) {
// 			this.setState({ error })
// 			toast.error(`Try again! Server is dead...`)
// 		} finally {
// 			this.setState({ loading: false })
// 		}
// 	}

// 	// Крок перший. Створюємо реф (посилання на елемент)
// 	scrollRef = React.createRef(null)

// 	// Крок другий. Пишемо метод getSnapshot
// 	getSnapshotBeforeUpdate(prevProps, prevState) {
// 		// Перевіряємо чи змінилась довжина массиву постів
// 		if (prevState.items.length !== this.state.items.length) {
// 			// Якщо так, створюємо скролл позішн та відміряємо висоту екрану
// 			const scrollPosition = this.scrollRef.current.offsetTop
// 			// Повертаємо скролл позишн
// 			return { scrollPosition }
// 		}
// 		//Інакше повертаємо null
// 		return null
// 	}

// 	// Крок третій. Приймаємо третім аргументом снепшот
// 	async componentDidUpdate(prevProps, prevState, snapshot) {
// 		// перевіряємо чи є снепшот та наші дані
// 		if (snapshot && prevState.items.length) {
// 			// якщо дані є то скролимо донизу нашу сторінку, вимірюємо довжину потрібну для скролла (420)
// 			const scrollPosition = this.scrollRef.current.offsetTop - 420
// 			// Сам скролл
// 			window.scrollTo({
// 				top: scrollPosition,
// 				behavior: 'smooth',
// 			})
// 		}

// 		const { skip, query } = this.state
// 		if (prevState.skip !== skip || prevState.query !== query) {
// 	try {
// 		this.setState({ loading: true, error: null })
// 		const { posts, total } = query
// 			? await fetchPostsByQuery({ limit: 6, skip, q: query })
// 			: await fetchPosts({ limit: 6, skip })
// 		this.setState(prev => ({ items: [...prev.items, ...posts], totalItems: total }))
// 	} catch (error) {
// 		this.setState({ error })
// 	} finally {
// 		this.setState({ loading: false })
// 	}
// }
// 	}

// 	handleSetQuery = query => {
// 		this.setState({ query, items: [], skip: 0 })
// 	}

// 	handleLoadMore = () => {
// 		this.setState(prev => ({ skip: prev.skip + 6 }))
// 	}

// 	handleToggleModal = () => {
// 		this.setState(prev => ({ isOpen: !prev.isOpen }))
// 	}

// 	handleOpenModal = content => {
// 		this.setState({ modalContent: content, isOpen: true })
// 	}
// 	handleNextPost = id => {
// 		const item = this.state.items.findIndex(post => post.id === id)
// 		if (item === this.state.items.length - 1) {
// 			this.setState({ modalContent: this.state.items[0] })
// 		} else {
// 			this.setState({ modalContent: this.state.items[item + 1] })
// 		}
// 	}

// 	render() {
// 		const { items, loading, error, totalItems, isOpen, modalContent } = this.state
// return (
// 	<div className={s.wrapper}>
// 		<h1 className={s.title}>Post LIST</h1>
// 		<SearchForm setQuery={this.handleSetQuery} />

// 		<PostList handleOpenModal={this.handleOpenModal} items={items} />

// 		{loading && <Loader />}

// 		{error && <h2>Smth went wrong!!</h2>}

// 		{/* Робимо скритий дів до цього місця буде йти скролл */}
// 		<div ref={this.scrollRef} style={{ visibility: 'hidden' }}></div>
// 		{items.length && items.length < totalItems && (
// 			<button onClick={this.handleLoadMore} className={s.loadBtn}>
// 				Load more
// 			</button>
// 		)}
// 		{isOpen && (
// 			<Modal close={this.handleToggleModal}>
// 				<h1>{modalContent.title}</h1>
// 				<p>{modalContent.body}</p>
// 				<span>{modalContent.reactions}</span>
// 				<div>
// 					{modalContent.tags.map(tag => (
// 						<span key={tag}> {tag} </span>
// 					))}
// 				</div>
// 				<button onClick={() => this.handleNextPost(modalContent.id)}>Next Post</button>
// 			</Modal>
// 		)}
// 	</div>
// )
// 	}
// }

export default Posts
