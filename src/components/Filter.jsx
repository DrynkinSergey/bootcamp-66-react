import { useDispatch } from 'react-redux'

import { changeFilter } from '../redux/todos/slice'

export const Filter = () => {
	const dispatch = useDispatch()
	const handleChangeFilter = value => {
		dispatch(changeFilter(value))
	}
	// const btnStyles =
	// 	'border-2 border-black px-4 py-1 text-lg rounded-md hover:text-white hover:bg-black transition-colors duration-300 btn'

	return (
		<div className='flex gap-2 justify-center mb-4'>
			<button className='applyBtn' onClick={() => handleChangeFilter('all')}>
				all
			</button>
			<button className='applyBtn' onClick={() => handleChangeFilter('active')}>
				active
			</button>
			<button className='applyBtn' onClick={() => handleChangeFilter('completed')}>
				completed
			</button>
		</div>
	)
}
