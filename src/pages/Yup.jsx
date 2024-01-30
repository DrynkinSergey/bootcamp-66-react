import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schemas/registerSchema'

export const Yup = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: { age: 0 },
	})
	const submit = data => {
		console.log(data)
		reset()
	}
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Yup</h1>
					<p className='py-6'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ad laudantium ex. Nam molestiae et
						velit assumenda, consectetur sint vel qui ullam ducimus dolor commodi cupiditate laboriosam voluptates
						temporibus eius.
					</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form onSubmit={handleSubmit(submit)} className='card-body relative'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input {...register('name')} placeholder='Enter your name' className='input input-bordered' />
							<p className='px-2 pt-1 text-red-500'>{errors.name?.message}</p>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input {...register('email')} placeholder='email' className='input input-bordered' />
							<p className='px-2 pt-1 text-red-500'>{errors.email?.message}</p>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Age</span>
							</label>
							<input {...register('age')} type='number' placeholder='Age' className='input input-bordered' />
							<p className='px-2 pt-1 text-red-500'>{errors.age?.message}</p>
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
							/>
							<p className='px-2 pt-1 text-red-500'>{errors.password?.message}</p>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Confirm Password</span>
							</label>
							<input
								{...register('confirmPassword')}
								type='password'
								placeholder='password'
								className='input input-bordered'
							/>
							<p className='px-2 pt-1 text-red-500'>{errors.confirmPassword?.message}</p>
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
