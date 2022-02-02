import StatisticsLine from "./StatisticsLine"

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

  const positiveFeedbackPercentage = totalFeedback === 0 ? 0 :(props.statisticsDict.good/ totalFeedback) *100 + '%'

  return (
    <div>
      <h2>Statistics</h2>
        <StatisticsLine text = "Good" value = {props.statisticsDict.good} />
        <StatisticsLine text = "Neutral" value = {props.statisticsDict.neutral} />
        <StatisticsLine text = "Bad" value = {props.statisticsDict.bad} />
        <StatisticsLine text = "Total" value = {totalFeedback} />
        <StatisticsLine text = "Average" value = {averageFeedback} />
        <StatisticsLine text = "Positive" value = {positiveFeedbackPercentage}  />
    </div>
  )
}

export default Statistics