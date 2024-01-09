import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'

export class Employee extends React.Component {
	state = {
		users: userData,
		filterStr: '',
		isAvailable: false,
		activeSkill: 'all',
	}

	// Мені треба створити функцію для видалення користувача. Я маю знайти певного користувача по ідентифікатору
	// Зробити функцію для фільтрації користувачів. Зв'язати інпут до стейту

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
		console.log(id)
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
// export const Employee = () => {
// return (
// 	<>
// 		<EmployeesFilter />
// 		<EmployeeList users={userData} />
// 	</>
// )
// }
