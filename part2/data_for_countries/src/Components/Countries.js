import React from 'react';
import Country from './Country';
import CountryInfo from './CountryInfo';

const Countries = (props) => {
  if(props.countries.length > 0) {
    if (props.countries.length === 1) {
      return <CountryInfo country={props.countries[0]} />
    }  
    if(props.countries.length > 10){
      return <div>Too many results. Specify more filters </div>
    }  
    return (
      <div>
        <h2>Countries found</h2>
        {props.countries.map(country => <Country key={country.cca2} country={country} handleShowSpecificCountry={props.handleShowSpecificCountry} />)}
      </div>
    )
  }
  return (
    <div>
      Introduce info to Search
    </div>
  )
}

export default Countries;
