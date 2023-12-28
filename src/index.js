import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// const element = React.createElement(
// 	'a',
// 	{
// 		href: '/',
// 		id: 'Link',
// 	},
// 	'My first link with React'
// )

// const hardElement = React.createElement(
// 	'div',
// 	{ id: 'wrapper' },
// 	React.createElement('h1', {}, React.createElement('span', { id: 'text' }, 'Hello i am span inside the h1'))
// )

const hardElementJSX = (
	<div id='wrapper'>
		<h1>
			<span id='text'>Hello i am span inside the h1, but i am JSX</span>
		</h1>
	</div>
)

const Header = () => {
	return (
		<header>
			<div>Bootcamp 66</div>
			<hr />
		</header>
	)
}
const Section = () => {
	return (
		<section className='section'>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic pariatur expedita sequi autem impedit tempore vitae
			fugit, veniam ratione quo sit at minima magni libero molestias corporis, explicabo ut nihil. Ad sit sint
			doloremque perspiciatis alias tempora eligendi inventore, eveniet esse quod eius amet a. Delectus assumenda
			doloribus eaque quis eum dolor commodi eos, et tempore, iure impedit quisquam. Et! Quod perspiciatis minima,
			praesentium vero beatae aspernatur nam molestiae voluptatum ut molestias eligendi tempora quaerat eius veritatis
			maiores similique explicabo reiciendis quibusdam fugit nostrum est! Nisi at error modi eaque.
		</section>
	)
}
const Footer = () => {
	return (
		<footer className='footer'>
			<span>&copy; 2023 | GoIT</span>
		</footer>
	)
}

const MyComponent = () => {
	return (
		<div>
			<Header />
			<h1>React</h1>
			<Section />
			<section>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit labore. Mollitia, autem laboriosam.
				Modi saepe earum quasi voluptatem laudantium! Hic sed ullam accusamus laborum eum quos aliquam ratione tempora.
			</section>
			<Footer />
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(root)
root.render(<App />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<>
// 		<App />
// 	</>
// )
