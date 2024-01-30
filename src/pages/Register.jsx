import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { registerThunk } from '../redux/auth/operations'
import { selectIsError } from '../redux/auth/slice'

export const Register = () => {
	const { register, reset, handleSubmit } = useForm()
	const [wasReq, setWasReq] = useState(false)
	const isError = useSelector(selectIsError)
	const dispatch = useDispatch()
	const submit = data => {
		console.log(data)
		setWasReq(true)
		dispatch(registerThunk(data))
			.unwrap()
			.then()
			.catch(err => toast.warn('Register is not seccess'))
		reset()
	}
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Register now!</h1>
					<p className='py-6'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ad laudantium ex. Nam molestiae et
						velit assumenda, consectetur sint vel qui ullam ducimus dolor commodi cupiditate laboriosam voluptates
						temporibus eius.
					</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(submit)} className='card-body relative'>
						{wasReq && isError && (
							<div className='bg-red-400 py-4 px-2 absolute top-[-20px] left-[12%] text-center rounded-md text-white font-bold '>
								Try again... Something went wrong!
							</div>
						)}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								{...register('name')}
								type='text'
								placeholder='Enter your name'
								className='input input-bordered'
								required
							/>
						</div>
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
							<button className='btn btn-primary'>Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
