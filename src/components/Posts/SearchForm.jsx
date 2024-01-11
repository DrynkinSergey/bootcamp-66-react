import React from 'react'
import s from './Posts.module.scss'
export class SearchForm extends React.Component {
	state = {
		searchStr: '',
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.setQuery(this.state.searchStr)
		this.setState({ searchStr: '' })
	}
	handleChangeInput = e => {
		this.setState({ searchStr: e.target.value })
	}
	render() {
		return (
			<div className={s.formWrapper}>
				<form onSubmit={this.handleSubmit} className={s.form}>
					<input value={this.state.searchStr} onChange={this.handleChangeInput} type='text' />
					<button>Search</button>
				</form>
			</div>
		)
	}
}
