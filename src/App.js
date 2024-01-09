import React from 'react'
import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import './index.css'
import { RegisterFormUncontrolled } from './components/RegisterForm/RegisterFormUncontrolled'
export const App = () => {
	const register = data => {
		console.log('Sending data...')
		setTimeout(() => {
			console.log(data)
			console.log('User has been registered!!')
		}, 2000)
	}
	return (
		<>
			<Employee />
			{/* <RegisterForm register={register} />
			<RegisterFormUncontrolled register={register} /> */}
		</>
	)
}
