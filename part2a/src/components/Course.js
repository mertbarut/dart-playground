import React from "react";

const Course = ({course}) => {
	let totalExercises = course.parts.reduce((accumulator, curValue) => {
		return accumulator + curValue.exercises
	}, 0)
	console.log(totalExercises)

	return(
		<>
			<h2>{course.name}</h2>
			{course.parts.map(course => <p key={course.id}>{course.name} {course.exercises}</p>)}
			<p><strong>total of {totalExercises} exercises</strong></p>
		</>
	)
}

const Courses = ({courses}) => {
	const names = courses.map(course => course.name)
	console.log(names)
	
	return(
		<>
			<h1>Web Development Curriculum</h1>
			{courses.map(course => <Course course={course} />)}
		</>
	)
}
export default Courses