import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addArticle } from '../../redux/articles/slice'
import { nanoid } from '@reduxjs/toolkit'

export const AddForm = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()
	const submit = data => {
		dispatch(addArticle({ ...data, id: nanoid() }))
		reset()
	}
	return (
		<form className='w-1/2 mx-auto grid gap-2 py-4' onSubmit={handleSubmit(submit)}>
			<input
				{...register('title')}
				type='text'
				placeholder='Type title here'
				className='input input-bordered input-primary w-full '
			/>
			<textarea
				{...register('body')}
				className='textarea textarea-primary'
				placeholder='Please enter the text...'
			></textarea>

			<input
				{...register('author')}
				type='text'
				placeholder='Type author name here'
				className='input input-bordered input-primary w-full '
			/>

			<div className='flex gap-2 justify-center'>
				<button className='btn btn-outline btn-primary'>Add article</button>
				<button className='btn btn-outline btn-error'>Reset</button>
			</div>
		</form>
	)
}
