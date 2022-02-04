import React from 'react'
import Course from './Components/Course'


const App = () => {
  const courses = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10,
        id: 1
      } ,

      {
        name: 'Using props to pass data',
        excercises: 7,
        id: 2
      } ,

      {
        name: 'State of a component',
        excercises: 14,
        id:3
      } ,
      
    ]
  },
  {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          excercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          excercises: 7,
          id: 2
        }
      ]
    }
]


  return (
    courses.map(course => <Course key={course['id']} course={course} />)
  )
}

export default App