import Button from "./Button"


const GiveFeedBack = (props) =>{

  return (
    <div>
      <h2>Give feedback</h2>
      <div id="buttonDiv" >
      <Button text="Good" onClick={props.feedBackDict.good} />
      <Button text="Neutral" onClick={props.feedBackDict.neutral} />
      <Button text="Bad" onClick={props.feedBackDict.bad} />
      </div>
    </div>
  )
}

export default GiveFeedBack