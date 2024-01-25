import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Filter } from './Filter'
import { editTodo, selectIsLoading, setTest } from '../redux/todos/slice'
import { addTodoThunk, deleteTodoThunk, fetchDataThunk, toggleTodoThunk } from '../redux/todos/operations'
import { selectFilter, selectFilteredDataMemo, selectUncompletedTodosMemo } from '../redux/todos/selectors'

export const Todolist = () => {
	const todos = useSelector(selectFilteredDataMemo)
	const filter = useSelector(selectFilter)
	const uncompletedTodos = useSelector(selectUncompletedTodosMemo)
	const loading = useSelector(selectIsLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDataThunk())
	}, [dispatch])

	const { register, handleSubmit, reset } = useForm()

	const submit = data => {
		dispatch(addTodoThunk(data))
		reset()
	}

	return (
		<div>
			<form className='flex flex-col w-1/2 mx-auto gap-2 py-5' onSubmit={handleSubmit(submit)}>
				<input
					{...register('title', { required: true })}
					type='text'
					className='border-2 px-3 py-1 border-black rounded-md shadow-md'
				/>
				<button className='bg-teal-500 py-2 rounded-md hover:bg-violet-500 hover:text-white transition-colors duration-300 '>
					Add todo
				</button>
			</form>
			<hr />

			<Filter />
			<h1 className='text-center font-bold text-4xl underline text-red-500 border-8 border-black w-1/2 mx-auto px-4 py-8 hover:text-green-500 transition duration-500 '>
				We have {uncompletedTodos} uncompleted todos
			</h1>
			<ul className='px-4 grid grid-cols-3 py-4 gap-4'>
				{todos.map(item => (
					<li className='border-black border-2 py-4 px-2 shadow-xl rounded-md' key={item.id}>
						<input checked={item.completed} type='checkbox' onChange={() => dispatch(toggleTodoThunk(item))} />
						<span className='ml-4 italic font-bold text-2xl'>{item.title}</span>
						<div className='flex justify-center gap-2 pt-2'>
							<button
								className='border-2 border-black px-2 py-1  rounded-md'
								onClick={() => dispatch(editTodo({ text: 'REDUX THE BEST', id: item.id }))}
							>
								Edit
							</button>
							<button
								className='border-2 border-black px-2 py-1  rounded-md'
								onClick={() => dispatch(deleteTodoThunk(item.id))}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>

			<div className='grid gap-2 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<p className='md:text-red-500 text-black lg:text-violet-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates, cupiditate animi soluta autem
					eaque perspiciatis doloribus nobis nostrum cum officiis amet dolores vero esse veniam, commodi vitae sed in.
				</p>
				<p className='lg:text-2xl lg:font-bold lg:bg-yellow-500'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi odit est fugit ipsam! Similique officia
					eligendi, voluptatem officiis suscipit quia exercitationem iusto fugit at modi harum quo recusandae natus
					quidem. Ut qui eum voluptas exercitationem enim aperiam, veritatis quidem sapiente aliquid nobis in! Quisquam
					consequuntur eos expedita delectus possimus. Eos animi ea fugiat est dolor nobis necessitatibus non quaerat
					repellendus!
				</p>
				<p className='bg-main text-second'>Hello world</p>
			</div>
			{loading && <h1>Loading...</h1>}
		</div>
	)
}
