import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/time.css'

const Time = () => {
  const [first, setfirst] = useState()

  const changeDateAndTime = () => {
    const date = new Date()
    const [month, day, year] = [
      date.getMonth()+1<10 ? "0"+(date.getMonth()+1):date.getMonth()+1,
      date.getDate()<10 ? "0"+(date.getDate()):date.getDate(),
      date.getFullYear(),
    ]


    const [hour, minutes, seconds] = [
      date.getHours(),
      date.getMinutes()<10 ? "0"+(date.getMinutes()):date.getMinutes(),
      date.getSeconds()<10 ? "0"+(date.getSeconds()):date.getSeconds(),
    
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
      <p className="time">{first}</p>
    </div>
  )
}

export default Time
