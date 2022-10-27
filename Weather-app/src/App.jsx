import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      }
      setCoords(obj)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  console.log('lo q hay qn coords', coords)

  // ---- Peticion del clima.

  useEffect(() => {
    if (coords) {
      
      const apikey = '7faf5450b762e280ba92d05e5941507f'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apikey}&units=metric`
      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data)
          console.log(weather)
        })
        .catch((err) => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      <h1>WeatherApp</h1>
      <WeatherCard weather={weather}/>
    </div>
  )
}

export default App
