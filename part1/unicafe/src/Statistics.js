const Statistics = (props) =>{
  return (
    <div>
      <h2>Statistics</h2>
        Good {props.statisticsDict.good}
        <br />
        Neutral {props.statisticsDict.neutral}
        <br />
        Bad {props.statisticsDict.bad}
    </div>
  )
}

export default Statistics