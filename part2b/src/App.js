import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const DisplayNames = ({persons, filter}) => {
	const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
	return (
		<>
		{filteredPersons.map(person => <li key={persons.id}>{person.name} {person.number}</li>)}
		</>
	)
}

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	  ])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [newFilter, setFilter] = useState('')

	//const addPerson = (event) => {
	//	event.preventDefault()
	//	//console.log(newName)
	//	//console.log(persons)
	//	let names = persons.map(person => person.name)
	//	if (names.includes(newName)) {
	//		alert(`${newName} is already added to phonebook`)
	//		setNewName('')
	//		return ;
	//	}
	//	const person = {
	//		name: newName,
	//		number: newNumber,
	//	}
	//	setPersons(persons.concat(person))
	//	setNewName('')
	//	setNewNumber('')
	//	//console.log('button clicked', event.target)
	//}

	//const handleNewName = (event) => {
	//	//console.log(event.target.value)
	//	setNewName(event.target.value)
	//}

	//const handleNewNumber = (event) => {
	//	//console.log(event.target.value)
	//	setNewNumber(event.target.value)
	//}

	//const handleFilter = (event) => {
	//	//console.log(event.target.value)
	//	setFilter(event.target.value)
	//}

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