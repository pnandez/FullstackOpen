import React from 'react';
const Weather = (props) => {

  return(
    <div>
      <h3>Weather in {props.weatherInfo.location.name}</h3>
      Temperature: {props.weatherInfo.current.temperature} celsius 
      <br/>
      <img src={props.weatherInfo.current.weather_icons[0]} alt="Weather"/>
      <br/>
      Wind: {props.weatherInfo.current.wind_speed} km/h. Dir {props.weatherInfo.current.wind_dir}
    </div>
  )
}
export default Weather;
