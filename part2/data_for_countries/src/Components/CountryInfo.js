import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Capital from './Capital';
import Language from './Language';
import Flag from './Flag';
import Weather from './Weather';


const CountryInfo = (props) =>{

  const [weatherInfo, setWeatherInfo] = useState(null)

  const  api_key = process.env.REACT_APP_WEATHER_API_KEY
  useEffect(()=>{
    axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.country.name.common}`)
      .then(response => setWeatherInfo( response.data))
  },[])
  console.log(weatherInfo)
  return(
    <div>
      <h2>{props.country.name.common}</h2>
      <Capital capitals={props.country.capital}/>
      Population {props.country.population}
      <Language languages={props.country.languages} />
      <Flag flags = {props.country.flags} />
      {weatherInfo === null? <div></div> :<Weather weatherInfo={weatherInfo} />}
    </div>
  )
}

export default CountryInfo;
