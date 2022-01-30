const Total = (props) => {
  var sum = 0
  props.parts.forEach(part => {
    sum += part['excercises']
  });
  return (
          <p>Number of exercises {sum}</p>
  )
}

export default Total