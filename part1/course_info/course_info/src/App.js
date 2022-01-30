import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      excercises: 10
    } ,

    {
      name: 'Using props to pass data',
      excercises: 7
    } ,

    {
      name: 'State of a component',
      excercises: 14
    } 
  ]




  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
</div>
  )
}

export default App