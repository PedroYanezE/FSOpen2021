import React from 'react'

const Course = ({ course }) => {
  return(
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}
  
const Total = ({ course }) => {
  // First parameter is the reducer function, second parameter is the initialValue 
  const sum = course.parts.reduce((previousValue, currentValue) => 
    previousValue + currentValue.exercises, 0)
  return(
    <b> total of {sum} exercises </b>
  )
}
  
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => 
        <Part key = {part.id} part={part} />
      )}
    </div>
  )
}
  
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

export default Course