const Total = (props) => {
  var sum = 0
  props.excercisesArray.forEach(excercise => {
    sum += excercise
  });
  return (
          <p>Number of exercises {sum}</p>
  )
}

export default Total