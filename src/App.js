import { Header } from './components/header/Header'
import { Section } from './components/section/Section'
import { Wrapper } from './components/wrapper/Wrapper'
import userData from './assets/user.json'
import { UserCard } from './components/userCard/UserCard'
import './index.css'
import { UserCardStyled } from './components/userCard/UserCardStyled'
import { Button } from './components/button/Button'
import { FlexContainer } from './styles/Shared'

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

	const isOnline = false
	return (
		<div>
			<Header message='Hello' />

			<h2 className='title'>Welcome to React JS</h2>
			<FlexContainer $gap='100px'>
				<Button $bg='pink'>Click me!</Button>
				<Button $border $bg='green'>
					Submit
				</Button>
				<Button $bg='red'>Cancel</Button>
			</FlexContainer>

			<Section title='Movies' data={moviesData} />
			<Section title='Goods' data={goodsData} />
			{/* <Section data={goodsData} /> */}
			{/* Condition render  */}
			{isOnline ? <h1>User is Online</h1> : <h1>User is offline</h1>}
			{isOnline && <h2>Only when user is online</h2>}
			{!isOnline && <h2>Only render when user is offline</h2>}
			<hr />
			<UserCard user={userData} />
			<hr />
			<hr />
			<UserCardStyled user={userData} />
			<hr />
			<Wrapper>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore error suscipit iste maiores excepturi,
					provident ut exercitationem temporibus, nesciunt aliquam ad veniam, vero laborum fugit quas placeat obcaecati
					minima soluta!
				</p>
			</Wrapper>
			<Wrapper>
				<h2>Продам холодильник</h2>
				<ul>
					<li>Samsung</li>
					<li>5000</li>
					<li>2 роки гарантії</li>
				</ul>
			</Wrapper>
			<Wrapper>
				<Section title='Movies' data={moviesData} />
			</Wrapper>
		</div>
	)
}

export default App
