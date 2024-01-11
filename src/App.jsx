import React from 'react'
import { Employee } from './components/Employees/Employee'
import { TodoList } from './components/TodoList/TodoList'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'
import './index.css'
import Posts from './components/Posts/Posts'

export const App = () => {
	return (
		<>
			{/* <Employee /> */}
			{/* <TodoList /> */}
			{/* <Counter /> */}
			{/* <ColorPicker colors={colors} /> */}
			<Posts />
		</>
	)
}
