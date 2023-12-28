export const Section = props => {
	console.log(props)
	return (
		<section>
			<h2>{props.title}</h2>
			<ul>
				{/* <li>{props.data[0].title}</li>
				<li>{props.data[1].title}</li> */}
				{props.data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</section>
	)
}
