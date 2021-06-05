import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => 
          <Part key={part.id} part={part} />   
        )}
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    const suma = parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0)
  
    return (
      <p><strong>total of {suma} exercises</strong></p>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }

export default Course;