import React, { createContext } from 'react'
import { Employee } from './components/Employees/Employee'
import { TodoList } from './components/TodoList/TodoList'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'
import './index.css'
import Posts from './components/Posts/Posts'

export const MyContext = createContext()
export const MyContext2 = createContext()
export const App = () => {
	const message = 'hello'
	return (
		<>
			{/* <ColorPicker colors={colors} /> */}
			{/* <Employee /> */}
			{/* <TodoList /> */}

			<MyContext.Provider value={{ car: 'Audi rs6', message: 'Hello context', colors }}>
				<Posts message={message} />
				<Counter />
			</MyContext.Provider>
		</>
	)
}
