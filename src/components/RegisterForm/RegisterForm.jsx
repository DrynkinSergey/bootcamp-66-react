import s from './RegisterForm.module.css'
export const RegisterForm = () => {
	return (
		<div className={s.flex}>
			<form className={s.form}>
				<h2 className={s.title}>Register</h2>
				<label>
					Name:
					<input type='text' />
				</label>
				<label>
					Email:
					<input type='text' />
				</label>
				<label>
					Password:
					<input type='password' />
				</label>
				<div>
					<label>Gender:</label>
					<input type='radio' name='gender' /> Male
					<input type='radio' name='gender' /> Female
				</div>
				<label>
					Country:
					<select>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</label>
				<br />
				<button className={s.btn}>Register</button>
			</form>
		</div>
	)
}
