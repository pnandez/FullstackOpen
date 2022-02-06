import React from "react";
import DisplayPerson from "./DisplayPerson";

const Persons = (props) => {
  return (
    <div>
        {props.personsToShow.map(person => <DisplayPerson key={person['id']} person={person} />)}
    </div>
  )
}

export default Persons;
