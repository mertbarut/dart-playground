import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [newFilter, setFilter] = useState('')

	useEffect(() => {
		console.log('effect')
		axios
		  .get('http://localhost:3001/persons')
		  .then(response => {
			console.log('promise fulfilled')
			setPersons(response.data)
		  })
	}, [])

	return (
		<div>
			<h2>Phonebook</h2>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				filter={newFilter}
				setFilter={setFilter}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
			/>
			<h2>Numbers</h2>
			<Persons
				persons={persons}
				filter={newFilter}
			/>
		</div>
	)
}

export default App