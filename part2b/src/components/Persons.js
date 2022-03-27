const Persons = ({persons, filter}) => {
	const filteredPersons = persons.filter(
		person => person.name.toLowerCase().includes(filter.toLowerCase())
	)
	return (
		<>
		{filteredPersons.map(person => <li key={persons.id}>{person.name} {person.number}</li>)}
		</>
	)
}

export default Persons