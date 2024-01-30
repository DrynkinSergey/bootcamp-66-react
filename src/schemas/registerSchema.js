import * as yup from 'yup'

export const schema = yup.object({
	name: yup
		.string()
		.required('Name is required')
		.min(3, 'Name must be more than 3 chars')
		.max(12, 'Name must be less than 12 chars'),
	email: yup.string().email('Email is not valid').required('Email is required'),
	password: yup
		.string()
		.min(6, 'Min length must be more than 6 chars')
		.max(18, 'Max length must be less than 18 chars')
		.required(),
	confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password is not match'),
	age: yup
		.number()
		.positive()
		.integer()
		.min(18, 'You so young for this app')
		.max(150, 'Age must be less than 150')
		.required(),
})
