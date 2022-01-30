import Part from './Part'


const Content  = (props) => {

  return (
    <div>
      <Part part={props.partsArray[0]}/>
      <Part part={props.partsArray[1]} />
      <Part part={props.partsArray[2]} />
  </div>)
}

export default Content