import React from 'react'

const WeatherCard = ({ weather }) => {
  console.log(weather)
  return (
    <div
      className="WeatherCard
    "
    >
      <h2>WeatherCard</h2>
      <img src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`} alt="image weather" />
      <h3>{weather?.name},&#32;{weather?.sys.country}</h3>
      <p>
        <span>{weather?.main.temp} °C</span>
        <span>"{weather?.weather[0].description}"</span>
      </p>
      <p>
        Wind speed<span>{weather?.wind.speed}</span>&#32;m/s
      </p>
      <p>
        Clouds<span>{weather?.clouds.all}%</span>
      </p>
      <p>Pressure:&#32;{weather?.main.pressure}&#32;mb</p>
      <p>Humidity:&#32;{weather?.main.humidity}&#32;hp</p>
    </div>
  )
}

export default WeatherCard
