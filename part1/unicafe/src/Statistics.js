const Statistics = (props) =>{

  if(props.statisticsDict.good === 0 && props.statisticsDict.neutral === 0 && props.statisticsDict.bad === 0){
    return (
      <div>
        <h2>Statistics</h2>
        No feedback given
      </div>
    )
  }

  const totalFeedback = props.statisticsDict.good + props.statisticsDict.bad + props.statisticsDict.neutral
  
  const averageFeedback = totalFeedback === 0 ? 0 :(props.statisticsDict.good - props.statisticsDict.bad) / totalFeedback

  const positiveFeedbackPercentage = totalFeedback === 0 ? 0 :(props.statisticsDict.good/ totalFeedback) *100

  return (
    <div>
      <h2>Statistics</h2>
        Good {props.statisticsDict.good}
        <br />
        Neutral {props.statisticsDict.neutral}
        <br />
        Bad {props.statisticsDict.bad}
        <br />
        Total {totalFeedback}
        <br />
        Average {averageFeedback}
        <br />
        Positive {positiveFeedbackPercentage} %
    </div>
  )
}

export default Statistics