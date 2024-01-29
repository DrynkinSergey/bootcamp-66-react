import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/auth/operations'

export const Login = () => {
	const { register, reset, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const submit = data => {
		dispatch(loginThunk(data))
		reset()
	}
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Login now!</h1>
					<p className='py-6'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ad laudantium ex. Nam molestiae et
						velit assumenda, consectetur sint vel qui ullam ducimus dolor commodi cupiditate laboriosam voluptates
						temporibus eius.
					</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(submit)} className='card-body'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								{...register('email')}
								type='email'
								placeholder='email'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								{...register('password')}
								type='password'
								placeholder='password'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
