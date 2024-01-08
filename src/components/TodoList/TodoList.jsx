import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Component } from 'react'
import { nanoid } from 'nanoid'

export class TodoList extends Component {
	state = {
		todos: todosData,
		newTodoText: '',
	}

	handleDeleteTodo = id => {
		// const newArray = this.state.todos.filter(item => item.id !== id)
		this.setState(prevState => ({
			todos: prevState.todos.filter(item => item.id !== id),
		}))
	}

	handleChangeInput = e => {
		console.log(e.target.value)
		this.setState({ newTodoText: e.target.value })
	}

	handleAddTodo = () => {
		const newObject = { id: nanoid(), todo: this.state.newTodoText, completed: false }
		this.setState(prevState => ({ todos: [...prevState.todos, newObject], newTodoText: '' }))
	}

	handleToggleTodo = id => {
		console.log(id)
		// this.setState(prevState => ({
		// 	todos: prevState.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
		// }))
		this.setState(prevState => ({
			todos: prevState.todos.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed, updatedAt: new Date().toLocaleTimeString() }
				} else {
					return item
				}
			}),
		}))
	}

	render() {
		const { todos, newTodoText } = this.state

		return (
			<StyledTodoList>
				<div>
					<StyledInput value={newTodoText} onChange={this.handleChangeInput} type='text' />
					<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
				</div>
				{todos.map(item => (
					<StyledTodo key={item.id}>
						<input checked={item.completed} onChange={() => this.handleToggleTodo(item.id)} type='checkbox' />
						<span>{item.todo}</span>
						<StyledButton onClick={() => this.handleDeleteTodo(item.id)} size='18px'>
							Delete
						</StyledButton>
					</StyledTodo>
				))}
				<button onClick={() => this.setState({ todos: [] })}>Clear</button>
			</StyledTodoList>
		)
	}
}
// export const TodoList = () => {

// return (
// 	<StyledTodoList>
// 		<div>
// 			<StyledInput type='text' />
// 			<StyledButton>Add</StyledButton>
// 		</div>
// 		{todos.map(item => (
// 			<StyledTodo>
// 				<input type='checkbox' />
// 				<span>{item.todo}</span>
// 				<StyledButton size='18px'>Delete</StyledButton>
// 			</StyledTodo>
// 		))}
// 		<button>Clear</button>
// 	</StyledTodoList>
// )
// }
