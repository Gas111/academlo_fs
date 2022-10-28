import { useState, useEffect } from 'react'
import "./styles/normalize.css"
import './styles/App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'
import Footer from './components/Footer'
import Time from './components/Time'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [fTemp, setfTemp] = useState()
  const [delay, setDelay] = useState(false)
  

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

  // ---- Peticion del clima.

  useEffect(() => {
    if (coords) {
      
      const apikey = '7faf5450b762e280ba92d05e5941507f'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apikey}&units=metric`
      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data)
          const fTempAux=((res.data.main.temp*(9/5))+32)
          setfTemp(Math.round(fTempAux))
        
        })
        .catch((err) => console.log(err))
    }
  }, [coords])


//   useEffect(() => {
//   setTimeout(()=>{setDelay(true)},3000)

// }, [])
  

  return (
    <div className="App">

      {(weather) ? <WeatherCard weather={weather} fTemp={fTemp}/>:<Loading/>}
      <Footer/>
    </div>
  )
}

export default App
