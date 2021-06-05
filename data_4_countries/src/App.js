import React, {useState, useEffect} from 'react'
import './App.css'
import Filter from './components/Filter'
import Country from './components/Country'
import Matches from './components/Matches'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
      console.log('Promise Succeed')
    })
  }

  useEffect(hook, [])
  
  const handleNewFilter = event => setFilter(event.target.value)
  
  const countriesToShow = filter
    ? countries.filter( country => 
                          country.name.toString().toLocaleLowerCase().includes(filter.toString().toLocaleLowerCase()))
    : countries
  
  const renderCountry = countriesToShow => <Country country={countriesToShow.pop()} />  

  const renderFilterQuery = (countriesToShow) => {
    if (countriesToShow.length === 1) {
      return renderCountry(countriesToShow)
    } else if (countriesToShow.length < 11 && filter) {
      return countriesToShow.map(country => 
      <Matches key={country.alpha2Code} country={country} 
              handler={() => setFilter(country.name)}/>)
    } else {
      return <p>Too many matches, specify another filter</p>
    }
  }

  return (
    <div>
      <Filter filter={filter} handler={handleNewFilter} />
      {renderFilterQuery(countriesToShow)}
    </div>
  )
}

export default App;
