import React from "react";

const NewPersonForm = (props) => {
  return (
    <form onSubmit={props.formOnSubmit}>
        <div>
          name: <input value={props.inputs['name']} onChange={props.inputs['handleName']}/>
        </div>
        <div>
          number: <input value={props.inputs['phone']} onChange={props.inputs['handlePhone']}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default NewPersonForm;

