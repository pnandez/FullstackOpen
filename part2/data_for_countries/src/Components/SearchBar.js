import React from "react";

const SearchBar = (props) =>  {
  return (
    <div>
      Name: <input value={props.value} onChange={props.handler} />
    </div>
  )
}
export default SearchBar;
