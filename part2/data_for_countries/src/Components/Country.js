import React from 'react';
import Button from './Button';
const Country = (props) => {
  return (
    <div>
      {props.country.name.common}
      <Button text={"Show"} onClick={() => props.handleShowSpecificCountry(props.country.name.common.toLowerCase())} />
    </div>
  )
}
export default Country;
