import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addTodoThunk } from '../../redux/todos/operations'

export const AddTodo = () => {
	const { register, handleSubmit, reset } = useForm()
	const dispatch = useDispatch()
	const submit = data => {
		dispatch(addTodoThunk(data))
		reset()
	}
	return (
		<form className='flex flex-col w-1/2 mx-auto gap-2 py-5' onSubmit={handleSubmit(submit)}>
			<input
				{...register('text', { required: true })}
				type='text'
				className='border-2 px-3 py-1 border-black rounded-md shadow-md'
			/>
			<button className='bg-teal-500 py-2 rounded-md hover:bg-violet-500 hover:text-white transition-colors duration-300 '>
				Add todo
			</button>
		</form>
	)
}
