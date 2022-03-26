import { useState } from 'react'

const Button = ({ onClick, text }) => {
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const StatisticLine = ({text, value}) => {
	return (
		<tr>
			<td>{text}&nbsp;</td>
			<td>{value}&nbsp;</td>
		</tr>
	)
}

const Statistics = (props) => {
	const totalRatings = props.good + props.neutral + props.bad
	if (totalRatings !== 0) {
		return (
			<div>
				<h1>give feedback</h1>
				<Button onClick={() => props.setGood(props.good + 1)}  text='good'/>
				<Button onClick={() => props.setNeutral(props.neutral + 1)}  text='neutral'/>
				<Button onClick={() => props.setBad(props.bad + 1)}  text='bad'/>
				<h1>stats</h1>
				<table>
					<StatisticLine text='good' value={props.good} />
					<StatisticLine text='neutral' value={props.neutral} />
					<StatisticLine text='bad' value={props.bad} />
					<StatisticLine text='all' value={totalRatings} />
					<StatisticLine text='average' value={(props.good * 1 + props.bad * -1) / (totalRatings)} />
					<StatisticLine text='positive' value={(props.good) / (totalRatings) * 100} />
				</table>
			</div>
		)
	}
	return (
		<>
			<h1>give feedback</h1>
			<Button onClick={() => props.setGood(props.good + 1)}  text='good'/>
			<Button onClick={() => props.setNeutral(props.neutral + 1)}  text='neutral'/>
			<Button onClick={() => props.setBad(props.bad + 1)}  text='bad'/>
			<h1>stats</h1>
			<p>No feedback given</p>
		</>
	)	
}

const App = () => {

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (Statistics({good, setGood, neutral, setNeutral, bad, setBad}))
}

export default App