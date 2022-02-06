import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import Countries from "./Components/Countries"

const App = (props) => {

  const [countries, setCountries] = useState([])
  const [countryToSearch, setCountryToSearch] = useState('')


  const countriesToShow = countryToSearch.length === 0 ? countries : countries.filter(country => country.name.common.toLowerCase().includes(countryToSearch) )

  useEffect(() => {
    const response = axios.get("https://restcountries.com/v3.1/all")
    response.then(response => setCountries(response.data))
  },[]) 


  const handleCountryToSearchInput = (event) => {
    setCountryToSearch(event.target.value.toLowerCase())
  }
  console.log(countriesToShow)
  return (
    <div>
      
      <h2>Search for a country</h2>
      <SearchBar value={countryToSearch} handler={handleCountryToSearchInput} />
      debugger: {countryToSearch} length: {countriesToShow.length}
      <Countries countries={countriesToShow} />
    </div>

  );
}

export default App;
