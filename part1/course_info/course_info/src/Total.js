const Total = (props) => {
  var sum = 0
  props.partsArray.forEach(part => {
    sum += part['excercises']
  });
  return (
          <p>Number of exercises {sum}</p>
  )
}

export default Total