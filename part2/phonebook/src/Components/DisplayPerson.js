import React from "react";
import Button from "./Button";

const DisplayPerson = (props) =>{
  return(
    <p>
      {props.person['name']} {props.person['number']} <Button text={"delete"} onClick={() => props.handleDelete(props.person.id)} />
    </p>
  )
}

export default DisplayPerson