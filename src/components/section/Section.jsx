export const Section = ({ title = 'Default section name', data = [] }) => {
	console.log(title, data)
	return (
		<section>
			<h2>{title}</h2>
			<ul>
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</section>
	)
}
