import s from './RegisterForm.module.css'
export const RegisterFormUncontrolled = ({ register }) => {
	const handleSubmit = e => {
		e.preventDefault()
		console.log('Submit is done!')
		const form = e.currentTarget
		const email = form.elements.email.value
		const username = form.elements.username.value
		const password = form.elements.password.value
		const gender = form.elements.gender.value
		const country = form.elements.country.value

		// console.log({ email, username, password, gender, country })
		register({ email, username, password, gender, country })
		form.reset()
	}

	return (
		<div className={s.flex}>
			<form onSubmit={handleSubmit} className={s.form}>
				<h2 className={s.title}>Register</h2>
				<label>
					Name:
					<input type='text' name='username' />
				</label>
				<label>
					Email:
					<input type='text' name='email' />
				</label>
				<label>
					Password:
					<input type='password' name='password' />
				</label>
				<div>
					<label>Gender:</label>
					<input type='radio' name='gender' value='male' /> Male
					<input type='radio' name='gender' value='female' /> Female
				</div>
				<label>
					Country:
					<select name='country'>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</label>
				<br />
				<button className={s.btn}>Register</button>
				<button type='button' className={s.btn}>
					Cancel
				</button>
			</form>
		</div>
	)
}
