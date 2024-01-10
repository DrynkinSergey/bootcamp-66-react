import { EmployeesFilter } from './EmployeesFilter'
import userData from './../../assets/users.json'
import React from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'
import { EmployeeList } from './EmployeeList'
import { toast } from 'react-toastify'
import Modal from '../Modal/Modal'

export class Employee extends React.Component {
	state = {
		users: userData,
		filterStr: '',
		isAvailable: false,
		activeSkill: 'all',
		isOpen: false,
		modalContent: null,
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

	// Methods for modal
	handleOpenModal = () => {
		this.setState({ isOpen: true })
	}
	handleCloseModal = () => {
		this.setState({ isOpen: false })
	}

	handleSetModalContent = content => {
		this.setState({ isOpen: true, modalContent: content })
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
				<button onClick={this.handleOpenModal}>Open MODAL</button>
				{this.state.isOpen && (
					<Modal title={this.state.modalContent.name} close={this.handleCloseModal}>
						<h1>{this.state.modalContent.bio}</h1>
						<h2>{this.state.modalContent.isOpenToWork ? 'хоче працювати' : ' не хоче працювати'}</h2>
					</Modal>
				)}
				{/* {this.state.isOpen && (
					<Modal close={this.handleCloseModal}>
						<h1>Продам холодильник!</h1>
						<img
							src='https://content.rozetka.com.ua/goods/images/big/277445401.jpg'
							alt='fridge'
							width={400}
							height={500}
						/>
					</Modal>
				)} */}
				<EmployeeList
					users={filteredUsers}
					onDeleteUser={this.handleDeleteUser}
					openModalWithContent={this.handleSetModalContent}
				/>
			</>
		)
	}
}
