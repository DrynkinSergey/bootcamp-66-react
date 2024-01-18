import React, { useRef } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { fetchPostById } from '../../services/api'
import { Link, useLocation, useParams } from 'react-router-dom'

const SinglePost = () => {
	const { postId } = useParams()
	const { data } = useHttp(fetchPostById, postId)
	const location = useLocation()
	const goBackLink = useRef(location.state?.from || '/posts')
	return (
		<div>
			<Link to={goBackLink.current}> Go back</Link>
			<h1>{data?.title}</h1>
			<p>{data?.body}</p>
		</div>
	)
}

export default SinglePost
