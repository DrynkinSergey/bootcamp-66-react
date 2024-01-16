import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ContextProvider } from './context/ContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ContextProvider>
		<App />
		<ToastContainer autoClose={1000} />
	</ContextProvider>
)
