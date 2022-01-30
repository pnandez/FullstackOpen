import Part from './Part'


const Content  = (props) => {

  const array = props.partsArray
  return (
    <div>
      <Part part={props.partsArray[0]} excercise= {props.excercisesArray[0]} />
      <Part part={props.partsArray[1]} excercise= {props.excercisesArray[1]} />
      <Part part={props.partsArray[2]} excercise= {props.excercisesArray[2]} />
  </div>)
}

export default Content