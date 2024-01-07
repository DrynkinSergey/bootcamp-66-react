import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todos from './../../assets/todos.json'
export const TodoList = () => {
	return (
		<div>
			<StyledTodoList>
				<div $height='auto'>
					<StyledInput type='text' />
					<StyledButton>Add</StyledButton>
				</div>
				{todos.map(item => (
					<StyledTodo>
						<input type='checkbox' />
						<span>{item.todo}</span>
						<StyledButton size='18px'>Delete</StyledButton>
					</StyledTodo>
				))}
				<button>Clear</button>
			</StyledTodoList>
		</div>
	)
}
