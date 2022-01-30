import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  console.log(course["parts"][0])


  return (
    <div>
      <Header course={course}/>
      <Content parts={course['parts']} />
      <Total parts={course['parts']}/>
</div>
  )
}

export default App