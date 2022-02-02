import React, { useState } from 'react'
import GiveFeedBack from './giveFeedBack'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const addGoodFeedback = () => {
    setGood(good + 1)
  }

  const addBadFeedback = () => {
    setBad(bad + 1)
  }

  const addNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const feedBackDictionary = {
    good: addGoodFeedback,
    neutral: addNeutralFeedback,
    bad: addBadFeedback
  }

  const statisticsDict = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <GiveFeedBack feedBackDict = {feedBackDictionary} />
      <Statistics statisticsDict = {statisticsDict} />
    </div>
  )
}

export default App
