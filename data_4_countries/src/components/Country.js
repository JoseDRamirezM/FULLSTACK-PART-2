import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({ country }) => {

  const [weather, setWeather] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    hook_weather()
  }, [])

  const hook_weather = () => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${encodeURI(process.env.REACT_APP_API_KEY)}&query=${country.capital}`)
    .then(response => {
      setWeather(response.data)
      setLoading(false)
      console.log('Weather Promise Succeed')
    })
  }
 
    
  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  } 
  
  return (
    
    <div>
        <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
        <h3>languages</h3>
          <ul>
            {country.languages.map(language => 
              <li key={language.name}>{language.name}</li>
            )}
          </ul>
        <img alt="flag" src={country.flag} width="200px" height="100px" />
        <h2>Weather in {country.capital}</h2>
          <div>
            <p><strong>temperature:</strong> {weather.current.temperature} °C</p>
            <img alt="weather_img" src={weather.current.weather_icons[0]} width="50px" height="50px" />
            <p><strong>wind:</strong> {weather.current.wind_speed} direction {weather.current.wind_dir}</p>
          </div>
    </div>
  )
}

export default Country
