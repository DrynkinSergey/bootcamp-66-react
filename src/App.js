import React from 'react'
import { TodoList } from './components/TodoList/TodoList'
import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import './index.css'
export const App = () => {
	return (
		<>
			<Employee />
			<RegisterForm />
		</>
	)
}
