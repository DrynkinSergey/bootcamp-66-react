import React, { useEffect, useState } from 'react'

export const useHttp = (fn, param) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	useEffect(() => {
		fn(param)
			.then(res => setData(res))
			.catch(error => setError(error.message))
	}, [fn, param])
	return { data, setData, error }
}
