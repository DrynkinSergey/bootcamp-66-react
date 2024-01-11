import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Component } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'

export class TodoList extends Component {
	state = {
		todos: todosData,
		newTodoText: '',
		skip: 0,
		limit: 3,
	}

	componentDidMount() {
		axios
			.get('https://dummyjson.com/todos', {
				params: {
					limit: this.state.limit,
					skip: 0,
				},
			})
			.then(res => this.setState({ todos: res.data.todos }))
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.skip !== this.state.skip || prevState.limit !== this.state.limit) {
			axios
				.get('https://dummyjson.com/todos', {
					params: {
						limit: this.state.limit,
						skip: this.state.skip,
					},
				})
				.then(res => this.setState({ todos: res.data.todos }))
		}
	}

	handleNextPage = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}
	handlePrevPage = () => {
		this.setState(prev => ({ skip: prev.skip - prev.limit }))
	}

	handleChangeLimit = e => {
		this.setState({ limit: +e.target.value })
	}

	handleDeleteTodo = id => {
		this.setState(prevState => ({
			todos: prevState.todos.filter(item => item.id !== id),
		}))
	}

	handleChangeInput = e => {
		this.setState({ newTodoText: e.target.value })
	}

	handleAddTodo = () => {
		const newObject = { id: nanoid(), todo: this.state.newTodoText, completed: false }
		this.setState(prevState => ({ todos: [...prevState.todos, newObject], newTodoText: '' }))
	}

	handleToggleTodo = id => {
		console.log(id)
		this.setState(prevState => ({
			todos: prevState.todos.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)),
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
				<button disabled={this.state.skip === 0} onClick={this.handlePrevPage}>
					PrevPage
				</button>
				<button onClick={this.handleNextPage}>NextPage</button>
				<select value={this.state.limit} onChange={this.handleChangeLimit}>
					<option value='3'>3</option>
					<option value='5'>5</option>
					<option value='10'>10</option>
				</select>
				{todos.map(item => (
					<StyledTodo key={item.id}>
						{item.id}.
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
