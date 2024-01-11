import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { PostList } from './PostList'
import s from './Posts.module.scss'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Loader } from './Loader'
import { toast } from 'react-toastify'
import Modal from '../Modal/Modal'

export default class Posts extends Component {
	state = {
		items: [],
		skip: 0,
		loading: false,
		error: null,
		query: '',
		totalItems: 0,
		isOpen: false,
		modalContent: null,
	}
	async componentDidMount() {
		try {
			this.setState({ loading: true, error: null })
			const { posts, total } = await fetchPosts({ limit: 6 })
			toast.success(`We have ${total} posts!`)
			this.setState({ items: posts, totalItems: total })
		} catch (error) {
			this.setState({ error })
			toast.error(`Try again! Server is dead...`)
		} finally {
			this.setState({ loading: false })
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		const { skip, query } = this.state
		if (prevState.skip !== skip || prevState.query !== query) {
			try {
				this.setState({ loading: true, error: null })
				const { posts, total } = query
					? await fetchPostsByQuery({ limit: 6, skip, q: query })
					: await fetchPosts({ limit: 6, skip })
				this.setState(prev => ({ items: [...prev.items, ...posts], totalItems: total }))
			} catch (error) {
				this.setState({ error })
			} finally {
				this.setState({ loading: false })
			}
		}
	}

	handleSetQuery = query => {
		this.setState({ query, items: [], skip: 0 })
	}

	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + 6 }))
	}

	handleToggleModal = () => {
		this.setState(prev => ({ isOpen: !prev.isOpen }))
	}

	handleOpenModal = content => {
		this.setState({ modalContent: content, isOpen: true })
	}
	handleNextPost = id => {
		const item = this.state.items.findIndex(post => post.id === id)
		if (item === this.state.items.length - 1) {
			this.setState({ modalContent: this.state.items[0] })
		} else {
			this.setState({ modalContent: this.state.items[item + 1] })
		}
	}
	// handlePrevPost = id => {
	// 	const item = this.state.items.findIndex(post => post.id === id)
	// 	if (item === 0) {
	// 		this.setState({ modalContent: this.state.items[this.state.length - 1] })
	// 	} else {
	// 		this.setState({ modalContent: this.state.items[item - 1] })
	// 	}
	// }

	render() {
		const { items, loading, error, totalItems, isOpen, modalContent } = this.state
		return (
			<div className={s.wrapper}>
				<h1 className={s.title}>Post LIST</h1>
				<SearchForm setQuery={this.handleSetQuery} />

				<PostList handleOpenModal={this.handleOpenModal} items={items} />

				{loading && <Loader />}

				{error && <h2>Smth went wrong!!</h2>}

				{items.length && items.length < totalItems && (
					<button onClick={this.handleLoadMore} className={s.loadBtn}>
						Load more
					</button>
				)}
				{isOpen && (
					<Modal close={this.handleToggleModal}>
						<h1>{modalContent.title}</h1>
						<p>{modalContent.body}</p>
						<span>{modalContent.reactions}</span>
						<div>
							{modalContent.tags.map(tag => (
								<span key={tag}> {tag} </span>
							))}
						</div>
						<button onClick={() => this.handleNextPost(modalContent.id)}>Next Post</button>
					</Modal>
				)}
			</div>
		)
	}
}
