import React, { useState } from 'react'
import Button from './Button'
import DisplayAnecdote from './DisplayAnecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState({
    0:0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
    
  })

  const [mostVoted, setMostVoted] = useState(0)

  const chooseNewAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVoteToAnecdote = () => {
    const copyOfPoints = {...points}
    copyOfPoints[selected] += 1
    setPoints(copyOfPoints)
    updateMostVoted()
  } 

  const updateMostVoted = () => {
    const maxValue = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);
    setMostVoted(maxValue)
  }

  return (
    <div>
      <DisplayAnecdote title = "Anecdote of the day" anecdote = {anecdotes[selected]} points = {points[selected]} />
      <Button text = "Next anecdote" onClick={chooseNewAnecdote} />
      <Button text = "Vote anecdote" onClick={addVoteToAnecdote} />
      <DisplayAnecdote title = "Anecdote with most votes" anecdote = {anecdotes[mostVoted]} points = {points[mostVoted]} />
    </div>
  )
}

export default App