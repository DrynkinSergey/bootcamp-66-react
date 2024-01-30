import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../schemas/registerSchema'
import { Input, PasswordInput } from '../components/Forms/Input'
import { motion } from 'framer-motion'
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
				<motion.div
					animate={{
						opacity: 1,
						x: 0,
						transition: {
							duration: 0.4,
							delay: 0.5,
						},
					}}
					initial={{ opacity: 0, x: 300 }}
					className='text-center lg:text-left'
				>
					<h1 className='text-5xl font-bold'>Yup</h1>
					<p className='py-6'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ad laudantium ex. Nam molestiae et
						velit assumenda, consectetur sint vel qui ullam ducimus dolor commodi cupiditate laboriosam voluptates
						temporibus eius.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.4,
							delay: 0.5,
						},
					}}
					className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
				>
					<form onSubmit={handleSubmit(submit)} className='card-body relative'>
						<Input register={register} name='name' placeholder='Enter your name' errors={errors} label='Name' />
						<Input register={register} name='email' placeholder='Enter your email' errors={errors} label='Email' />
						<Input register={register} name='bio' placeholder='Enter your bio' errors={errors} label='User bio' />
						<Input
							register={register}
							name='age'
							placeholder='Enter your Age'
							errors={errors}
							label='Age'
							type='number'
						/>
						<Input
							register={register}
							type='password'
							name='password'
							placeholder='Enter the pass'
							label='Password'
							errors={errors}
						/>
						<Input
							register={register}
							type='password'
							name='confirmPassword'
							placeholder='Enter the pass'
							label='Confirm Password'
							errors={errors}
						/>

						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Register</button>
						</div>
					</form>
				</motion.div>
			</div>
		</div>
	)
}
