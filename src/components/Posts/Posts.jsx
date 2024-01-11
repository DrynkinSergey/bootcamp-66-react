import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { PostList } from './PostList'
import s from './Posts.module.scss'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Loader } from './Loader'

export default class Posts extends Component {
	state = {
		items: [],
		skip: 0,
		loading: false,
		error: null,
		query: '',
		totalItems: 0,
	}
	async componentDidMount() {
		try {
			this.setState({ loading: true })
			const { posts, total } = await fetchPosts({ limit: 6 })
			this.setState({ items: posts, totalItems: total })
		} catch (error) {
			this.setState({ error })
		} finally {
			this.setState({ loading: false })
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		const { skip, query } = this.state
		if (prevState.skip !== skip || prevState.query !== query) {
			try {
				this.setState({ loading: true })
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
	render() {
		const { items, loading, error, totalItems } = this.state
		return (
			<div className={s.wrapper}>
				<h1 className={s.title}>Post LIST</h1>
				<SearchForm setQuery={this.handleSetQuery} />

				<PostList items={items} />

				{loading && <Loader />}

				{error && <h2>Smth went wrong!!</h2>}

				{items.length && items.length < totalItems && (
					<button onClick={this.handleLoadMore} className={s.loadBtn}>
						Load more
					</button>
				)}
			</div>
		)
	}
}
