import React from 'react'
import s from './Employee.module.css'
const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = ({
	onChangeFilter,
	onClearFilter,
	onChangeActiveSkill,
	onChangeIsAvalaible,
	activeSkill,
	isAvailable,
	filterStr,
}) => {
	return (
		<div className={s.filtersWrapper}>
			<h1>Filters</h1>
			<div className={s.flex}>
				<input className={s.input} value={filterStr} onChange={onChangeFilter} />
				<button onClick={onClearFilter}>Clear</button>
				<label>
					<input type='checkbox' checked={isAvailable} onChange={onChangeIsAvalaible} />
					<span> isAvailable</span>
				</label>
			</div>
			<div className={s.flex}>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							onChange={() => onChangeActiveSkill(radioButtonName)}
							checked={radioButtonName === activeSkill}
							type='radio'
							value={radioButtonName}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</div>
		</div>
	)
}
