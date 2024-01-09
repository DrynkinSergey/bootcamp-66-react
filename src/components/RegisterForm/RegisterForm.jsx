import React from 'react'
import s from './RegisterForm.module.css'
export class RegisterForm extends React.Component {
	state = {
		username: '',
		email: '',
		password: '',
		gender: 'female',
		country: '',
		agree: false,
	}

	handleChangeUsername = e => {
		console.log(e.target.value)
		this.setState({ username: e.target.value })
	}
	handleChangeEmail = e => {
		console.log(e.target.value)
		this.setState({ email: e.target.value })
	}

	handleChangeInput = e => {
		//1. if cases
		const { target } = e
		const { name, value } = target
		console.log(e.target.name, e.target.value)

		// if (e.target.name === 'username') {
		// 	this.setState({ username: e.target.value })
		// }
		// if (e.target.name === 'email') {
		// 	this.setState({ email: e.target.value })
		// }

		// 2. switch case
		// switch (e.target.name) {
		// 	case 'username':
		// 		this.setState({ username: e.target.value })
		// 		break
		// 	case 'email':
		// 		this.setState({ email: e.target.value })
		// 		break
		// 	case 'password':
		// 		this.setState({ password: e.target.value })
		// 		break
		// 	default:
		// 		break
		// }

		// 3. Dynamic field
		if (name === 'agree') {
			return this.setState({ agree: !this.state.agree })
		}
		this.setState({ [name]: value })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.register(this.state)
		this.setState({
			username: '',
			email: '',
			password: '',
			gender: 'female',
			country: '',
			agree: false,
		})
	}

	render() {
		return (
			<div className={s.flex}>
				<form onSubmit={this.handleSubmit} className={s.form}>
					<h2 className={s.title}>Register</h2>
					<label>
						Name:
						<input type='text' name='username' value={this.state.username} onChange={this.handleChangeInput} />
					</label>
					<label>
						Email:
						<input type='text' name='email' value={this.state.email} onChange={this.handleChangeInput} />
					</label>
					<label>
						Password:
						<input type='password' name='password' value={this.state.password} onChange={this.handleChangeInput} />
					</label>
					<div>
						<label>Gender:</label>
						<input
							onChange={this.handleChangeInput}
							type='radio'
							name='gender'
							value='male'
							checked={this.state.gender === 'male'}
						/>
						Male
						<input
							onChange={this.handleChangeInput}
							type='radio'
							name='gender'
							value='female'
							checked={this.state.gender === 'female'}
						/>
						Female
					</div>
					<label>
						Country:
						<select name='country' value={this.state.country} onChange={this.handleChangeInput}>
							<option value='ukraine'>Ukraine</option>
							<option value='usa'>USA</option>
							<option value='canada'>Canada</option>
						</select>
					</label>
					<br />
					<input name='agree' type='checkbox' onChange={this.handleChangeInput} checked={this.state.agree} /> I agree
					with rules!
					<button className={s.btn}>Register</button>
				</form>
			</div>
		)
	}
}
// export const RegisterForm = () => {
// return (
// 	<div className={s.flex}>
// 		<form className={s.form}>
// 			<h2 className={s.title}>Register</h2>
// 			<label>
// 				Name:
// 				<input type='text' />
// 			</label>
// 			<label>
// 				Email:
// 				<input type='text' />
// 			</label>
// 			<label>
// 				Password:
// 				<input type='password' />
// 			</label>
// 			<div>
// 				<label>Gender:</label>
// 				<input type='radio' name='gender' /> Male
// 				<input type='radio' name='gender' /> Female
// 			</div>
// 			<label>
// 				Country:
// 				<select>
// 					<option value='ukraine'>Ukraine</option>
// 					<option value='usa'>USA</option>
// 					<option value='canada'>Canada</option>
// 				</select>
// 			</label>
// 			<br />
// 			<button className={s.btn}>Register</button>
// 		</form>
// 	</div>
// )
// }
