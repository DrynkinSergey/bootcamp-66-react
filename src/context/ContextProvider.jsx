import axios from 'axios'
import { createContext, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const UserContext = createContext()

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get('https://dummyjson.com/users').then(res => setData(res.data.users))
	}, [])

	const login = useCallback(name => {
		if (name !== 'admin') {
			return toast.error('Data is not valid')
		}
		setUser(name)
		setIsLoggedIn(true)
	}, [])

	const logout = useCallback(() => {
		setUser('')
		setIsLoggedIn(false)
	}, [])

	const contextValue = {
		login,
		logout,
		user,
		isLoggedIn,
		data,
	}
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
