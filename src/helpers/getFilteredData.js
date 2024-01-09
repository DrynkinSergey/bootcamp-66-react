export const getFilteredData = (users, filterStr, isAvailable, activeSkill) => {
	return users
		.filter(
			user =>
				user.name.toLowerCase().includes(filterStr.toLowerCase()) ||
				user.email.toLowerCase().includes(filterStr.toLowerCase())
		)
		.filter(user => (isAvailable ? user.isOpenToWork : user))
		.filter(user => (activeSkill !== 'all' ? user.skills.includes(activeSkill) : user))
}
