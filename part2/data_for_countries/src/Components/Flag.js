import React from 'react';

const Flag = (props) =>{
  return(
    <div>
      <img 
      src={props.flags.png}
      alt="Flag"
      />
    </div>
  )
}

export default Flag;
