import React from 'react'
import { useState } from 'react'
import '../styles/weather-card.css'
import '../styles/normalize.css'
import Time from './Time'


const WeatherCard = ({ weather, fTemp }) => {
  const [isCelcius, setIsCelcius] = useState(true)

  const changeScale = () => {
    setIsCelcius(!isCelcius)
  }

  console.log(weather)
  return (
    <article className="weather-card">
      <Time/>
      <h2 className="weather-card__title-city">City: </h2>
      <h3 className="weather-card__city">
        {weather?.name},&#32;{weather?.sys.country}
      </h3>
      <div className="weather-card__section">
        <img
          className="weather-card__img"
          src={
            weather
              ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
              : ''
          }
          alt="image weather"
        />
        <span className="weather-card__temp">
          {isCelcius ? `${Math.round(weather?.main.temp)}` : `${fTemp}`}
        </span>
        <span className="weather-card__temp-unit">
          {isCelcius ? ' °C' : ' °F'}
        </span>
      </div>

      <span className="weather-card__description">
        &#32;"{weather?.weather[0].description}"
      </span>
      <p>
        Wind speed: &#32;<span>{weather?.wind.speed}</span>&#32;m/s
      </p>
      <p>
        Clouds:&#32;<span>{weather?.clouds.all}%</span>
      </p>
      <p>Pressure:&#32;{weather?.main.pressure}&#32;mb</p>
      <p>Humidity:&#32;{weather?.main.humidity}&#32;hp</p>
      <button className="weather-card__boton" onClick={changeScale}>
        Change °C/°F
      </button>
    </article>
  )
}

export default WeatherCard
