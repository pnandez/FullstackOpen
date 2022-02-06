import React from 'react';
import Capital from './Capital';
import Language from './Language';
import Flag from './Flag';
const CountryInfo = (props) =>{
  return(
    <div>
      <h2>{props.country.name.common}</h2>
      <Capital capitals={props.country.capital}/>
      Population {props.country.population}
      <Language languages={props.country.languages} />
      <Flag flags = {props.country.flags} />
    </div>
  )
}

export default CountryInfo;
