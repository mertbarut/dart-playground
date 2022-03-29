import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({countries, filter}) => {
	const filteredCountries = countries.filter(
		country => country.name.common.toLowerCase().includes(filter.toLowerCase())
	)
	console.log(filteredCountries)
	if (filteredCountries.length === 0)
	{
		return (
			<>
			No countries to display
			</>
		)
	}
	else if (filteredCountries.length === 1)
	{
		let found = filteredCountries[0]
		let countryName = found.name.common
		let countryCapitalCity = found.capital[0]
		let countryAreaCode = found.area
		let countryLanguages = Object.values(found.languages)
		let countryFlagImage = found.flags['png']
		console.log(countryName, countryCapitalCity, countryAreaCode, countryLanguages, countryFlagImage)

		return (
			<>
			<h1>{countryName}</h1>
			<p>capital: {countryCapitalCity}</p>
			<p>area code: {countryAreaCode}</p>
			<h2>languages:</h2>
			<ul>
				{countryLanguages.map(language => <li key={language}>{language}</li>)}
			</ul>
			<img src={countryFlagImage} />
			</>
		)
	}
	else if (filteredCountries.length < 10)
	{
		return (
			<>
			{filteredCountries.map(country => <li key={country.altSpellings[0]}>{country.name.common}</li>)}
			</>
		)
	}
	else
	{
		return (
			<>
			Too many countries to display
			</>
		)
	}
}

const App = () => {
	const [countries, setCountries] = useState([])
	const [newCountry, setCountry] = useState('')

	const handleNewCountry = (event) => {
		//console.log(event.target.value)
		setCountry(event.target.value)
	}

	useEffect(() => {
		console.log('effect')
		axios
		  .get('https://restcountries.com/v3.1/all')
		  .then(response => {
			console.log('promise fulfilled')
			console.log(response.data)
			setCountries(response.data)
		  })
	}, [])

	return (
		<div>
			<form>
			<div>
				find countries: <input
					value={newCountry}
					onChange={handleNewCountry} />
			</div>
			</form>
			<Countries countries={countries} filter={newCountry} />
		</div>
	)
}

export default App