import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  } 

  const part2 = {
    name: 'Using props to pass data',
    excercises: 7
  } 

  const part3 = {
    name: 'State of a component',
    excercises: 14
  } 


  const partsArray = [part1, part2,part3]

  return (
    <div>
      <Header course={course}/>
      <Content partsArray={partsArray} />
      <Total partsArray={partsArray}/>
</div>
  )
}

export default App