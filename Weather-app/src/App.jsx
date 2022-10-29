import { useState, useEffect } from 'react'
import './styles/normalize.css'
import './styles/App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'
import Footer from './components/Footer'
import Time from './components/Time'
import videoClearDay from '../src/assets/videos/clear-day.mp4'
import videoClearNigth from '../src/assets/videos/clear-nigth.mp4'
import videoRainDay from '../src/assets/videos/rain-day.mp4'
import videoRainNigth from '../src/assets/videos/rain-nigth.mp4'
import videoCloudDay from '../src/assets/videos/cloud-day.mp4'
import videoCloudNigth from '../src/assets/videos/cloud-nigth.mp4'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [fTemp, setfTemp] = useState()
  const [delay, setDelay] = useState(false)
  const [weatherMain, setWeatherMain] = useState()

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
          const fTempAux = res.data.main.temp * (9 / 5) + 32
          setfTemp(Math.round(fTempAux))
        })
        .catch((err) => console.log(err))
    }
  }, [coords])

  //   useEffect(() => {
  //   setTimeout(()=>{setDelay(true)},3000)

  // }, [])

  const showVideos = () => {
    if (weather?.weather[0].id >= 500 && weather?.weather[0].id < 600) {
      if (weather?.weather[0].icon[2] == 'n') {
        return (
          <video
            className="videobg"
            src={videoRainNigth}
            autoPlay
            loop
            muted
          ></video>
        )
      }

      if (weather?.weather[0].icon[2] == 'd') {
        return (
          <video
            className="videobg"
            src={videoRainDay}
            autoPlay
            loop
            muted
          ></video>
        )
      }
    }

    if (weather?.weather[0].icon === '01d') {
      return (
        <video
          className="videobg"
          src={videoClearDay}
          autoPlay
          loop
          muted
        ></video>
      )
    }
    if (weather?.weather[0].icon === '01n') {
      return (
        <video
          className="videobg"
          src={videoClearNigth}
          autoPlay
          loop
          muted
        ></video>
      )
    }
    if (weather?.weather[0].id >= 800) {
      if (weather?.weather[0].icon[2] == 'n') {
        return (
          <video
            className="videobg"
            n
            src={videoCloudNigth}
            autoPlay
            loop
            muted
          ></video>
        )
      }

      if (weather?.weather[0].icon[2] == 'd') {
        return (
          <video
            className="videobg"
            n
            src={videoCloudDay}
            autoPlay
            loop
            muted
          ></video>
        )
      }
    }
  }

  return (
    <div className="App">
      {weather && showVideos()}
      {weather ? <WeatherCard weather={weather} fTemp={fTemp} /> : <Loading />}
      <Footer />
    </div>
  )
}

export default App
