import { Header } from './components/header/Header'
import { Section } from './components/section/Section'

const App = () => {
	const moviesData = [
		{ id: 1, title: 'Terminator' },
		{ id: 2, title: 'Harry Potter' },
		{ id: 3, title: 'Taxi' },
	]

	const goodsData = [
		{ id: '1', title: 'carrot' },
		{ id: 'dsfas21j3sdfjakj132', title: 'potato' },
		{ id: 3, title: 'milk' },
		{ id: 4, title: 'water' },
		{ id: 5, title: 'phone' },
	]
	return (
		<div>
			<Header />
			<Section title='Movies' data={moviesData} />
			<Section title='Goods' data={goodsData} />
		</div>
	)
}

export default App
