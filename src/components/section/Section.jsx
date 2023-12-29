import s from './Section.module.css'

export const Section = ({ title = 'Default section name', data = [] }) => {
	return (
		<section>
			<h2 className={s.title}>{title}</h2>
			<ul className={s.list}>
				{data.map(item => (
					<li className={s.item} key={item.id}>
						{item.title}
						<button disabled={item.title === 'Taxi'}>Delete</button>
					</li>
				))}
			</ul>
		</section>
	)
}
