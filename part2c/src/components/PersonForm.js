import Filter from './Filter'

const PersonForm = ({persons, setPersons, newFilter, setFilter, newName, setNewName, newNumber, setNewNumber}) => {

	const handleNewName = (event) => {
		//console.log(event.target.value)
		setNewName(event.target.value)
	}
	
	const handleNewNumber = (event) => {
		//console.log(event.target.value)
		setNewNumber(event.target.value)
	}

	const addPerson = (event) => {
		event.preventDefault()
		//console.log(newName)
		//console.log(persons)
		let names = persons.map(person => person.name)
		if (names.includes(newName)) {
			alert(`${newName} is already added to phonebook`)
			setNewName('')
			return ;
		}
		const person = {
			name: newName,
			number: newNumber,
		}
		setPersons(persons.concat(person))
		setNewName('')
		setNewNumber('')
		//console.log('button clicked', event.target)
	}

	return (
		<form onSubmit={addPerson}>
			<Filter keyword={newFilter} setter={setFilter}/>
			<h3>Add a new</h3>				
			<div>
				name: <input
					value={newName}
					onChange={handleNewName} />
			</div>
			<div>
				number: <input
					value={newNumber}
					onChange={handleNewNumber} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm