import React from 'react'
import { useHttp } from '../../hooks/useHttp'
import { fetchPosts } from '../../services/api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { SearchPostsForm } from '../../components/SearchPostsForm'

const Posts = () => {
	const { data } = useHttp(fetchPosts)
	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('query') || ''
	const location = useLocation()
	const handleSetQuery = query => {
		setSearchParams(query ? { query } : {})
	}

	const getFilteredPosts = data?.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	return (
		<div>
			<h1>Posts</h1>
			<SearchPostsForm handleSetQuery={handleSetQuery} />
			<ul>
				{getFilteredPosts?.map(post => (
					<li key={post.id}>
						<Link state={{ from: location }} to={post.id.toString()}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Posts
