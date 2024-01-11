import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import { PostList } from './PostList'
import s from './Posts.module.scss'

export default class Posts extends Component {
	render() {
		return (
			<div>
				<h1 className={s.title}>Post LIST</h1>
				<SearchForm />
				<PostList />
				<button className={s.loadBtn}>Load more</button>
			</div>
		)
	}
}
