import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteArticle } from '../../redux/articles/slice'
import { deleteArticleThunk } from '../../redux/articles/operations'
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todos/operations'
import { editTodo } from '../../redux/todos/slice'

export const Todo = ({ id, text, completed }) => {
	const dispatch = useDispatch()
	return (
		<li className='card w-full bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h2 className='card-title'>{text}</h2>
				<div className='form-control'>
					<label className='label cursor-pointer'>
						<input
							checked={completed}
							className='checkbox checkbox-primary'
							type='checkbox'
							onChange={() => dispatch(toggleTodoThunk({ id, text, completed }))}
						/>
						<span className='label-text'>Task is {!completed ? 'active' : 'completed'}</span>
					</label>
				</div>

				<div className='card-actions justify-end flex gap-2'>
					<button className='btn btn-primary' onClick={() => dispatch(deleteTodoThunk(id))}>
						Delete
					</button>
				</div>
			</div>
		</li>
	)
}
