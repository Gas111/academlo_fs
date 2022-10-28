import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/time.css'

const Time = () => {
  const [first, setfirst] = useState()

  const changeDateAndTime = () => {
    const date = new Date()
    const [month, day, year] = [
      date.getMonth(),
      date.getDate(),
      date.getFullYear(),
    ]
    const [hour, minutes, seconds] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ]
    setfirst(`${day}/${month}/${year}  - ${hour}:${minutes}:${seconds} `)
  }

  setInterval(() => {
    changeDateAndTime()
  }, 1000)

  useEffect(() => {
    changeDateAndTime()
  }, [first])

  return (
    <div>
      <span className="time">{first}</span>
    </div>
  )
}

export default Time
