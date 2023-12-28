export const Section = props => {
	console.log(props)
	return (
		<section>
			<h2>{props.title}</h2>
			<ul>
				{props.data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</section>
	)
}
