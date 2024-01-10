import { EmployeesFilter } from './EmployeesFilter'
import userData from './../../assets/users.json'
import React from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'
import { EmployeeList } from './EmployeeList'
import { toast } from 'react-toastify'

export class Employee extends React.Component {
	state = {
		users: userData,
		filterStr: '',
		isAvailable: false,
		activeSkill: 'all',
	}

	componentDidMount() {
		const users = JSON.parse(localStorage.getItem('USERS_DATA'))
		if (users?.length) {
			this.setState({ users })
		}
	}

	componentDidUpdate(_, prevState) {
		if (prevState.users.length !== this.state.users.length) {
			toast.info('Users were changed')
			localStorage.setItem('USERS_DATA', JSON.stringify(this.state.users))
		}
	}

	handleChangeActiveSkill = skill => {
		this.setState({ activeSkill: skill })
	}
	handleClearFilter = () => {
		this.setState({ filterStr: '' })
	}

	handleChangeIsAvailable = () => {
		this.setState({ isAvailable: !this.state.isAvailable })
	}

	handleChangeFilterStr = e => {
		this.setState({ filterStr: e.target.value })
	}

	handleDeleteUser = id => {
		this.setState(prevState => ({ users: prevState.users.filter(user => user.id !== id) }))
	}

	render() {
		const { filterStr, isAvailable, activeSkill, users } = this.state
		const filteredUsers = getFilteredData(users, filterStr, isAvailable, activeSkill)

		return (
			<>
				<EmployeesFilter
					onChangeActiveSkill={this.handleChangeActiveSkill}
					onChangeIsAvalaible={this.handleChangeIsAvailable}
					onChangeFilter={this.handleChangeFilterStr}
					onClearFilter={this.handleClearFilter}
					filterStr={filterStr}
					activeSkill={activeSkill}
					isAvailable={isAvailable}
				/>
				<EmployeeList users={filteredUsers} onDeleteUser={this.handleDeleteUser} />
			</>
		)
	}
}
