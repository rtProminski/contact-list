import { useState } from 'react'

import FormContact from './components/FormContact'
import ContactList from './components/ContactList'

const App = () => {
	const [users, setUsers] = useState([])

	const createContact = newContact => {
		const updatedUsers = [
			...users,
			{
				id: Math.floor(Math.random() * 1000),
				...newContact,
			},
		]

		setUsers(updatedUsers)
	}

	return (
		<div className="flex flex-col items-center gap-10">
			<FormContact onCreate={createContact} />
			<ContactList users={users} />
		</div>
	)
}

export default App
