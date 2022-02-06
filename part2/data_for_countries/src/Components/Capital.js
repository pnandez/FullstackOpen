import React from 'react';
const Capital = (props) =>{
  const capital = props.capitals.join() 
  return (
    <div>
      Capital: {capital}
    </div>
  )
}
export default Capital;
