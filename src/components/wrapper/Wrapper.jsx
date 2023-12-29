import React from 'react'

export const Wrapper = props => {
	return (
		<section>
			<h2>Section name</h2>
			{props.children}
		</section>
	)
}
