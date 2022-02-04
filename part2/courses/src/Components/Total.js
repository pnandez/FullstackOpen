const Total = (props) => {
  var sum = props.parts.reduce((s,p) => s+p['excercises'],0)
  return (
          <p>Number of exercises {sum}</p>
  )
}

export default Total