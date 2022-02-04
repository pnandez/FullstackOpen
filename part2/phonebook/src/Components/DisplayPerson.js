import React from "react";

const DisplayPerson = ({person}) =>{
  return(
    <p>
      {person['name']} {person['number']}
    </p>
  )
}

export default DisplayPerson