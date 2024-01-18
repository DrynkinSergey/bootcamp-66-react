import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const submit = data => {
		console.log(data)
		reset()
	}
	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input
					{...register('name', {
						required: 'This field is required!',
						minLength: { value: 3, message: 'This field must be more than 3 chars' },
						maxLength: {
							value: 12,
							message: 'This field must be less than 12 chars',
						},
					})}
				/>
				{errors?.name && <div>{errors.name.message}</div>}
				<input {...register('email')} type='email' />
				<input {...register('password')} type='password' />
				<input {...register('agree')} type='checkbox' />
				<select {...register('children')}>
					<option value='1'>1</option>
					<option value='2'>2</option>
				</select>
				<button>Login</button>
			</form>
		</div>
	)
}
