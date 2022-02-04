import React from "react";

const FilterPerson = (props) =>{
  return (
    <div>
      search for: <input value={props.filterInput} onChange={props.handleFilterInput}/>
    </div>
  )
}

export default FilterPerson

