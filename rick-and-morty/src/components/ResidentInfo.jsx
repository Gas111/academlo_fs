import React from 'react'
import '../styles/resident-info.css'
import '../index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

// name,image,status, origin.name,episode.length


const ResidentInfo = ({ resident }) => {
  // resident es una url

  const [residentInfo, setResidentInfo] = useState('')

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => {
        setResidentInfo(res.data)
     
  console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(residentInfo)

  return (
    <article>
      <div className="box-status">
        <div className="box-status__circle">{residentInfo?.status}</div>
        <span className="box-status__text">{residentInfo?.status}</span>
      </div>
      <img className="image-resident" src={residentInfo?.image} alt="image character" />
      <h5 className="resident-name">{residentInfo?.name}</h5>
      <div className="line"></div>
      <p className="title-info">RAZA</p>
      <p className="title-data">{residentInfo?.species}</p>
      <p className="title-info">ORIGEN</p>
      {/* <p className="title-data">{residentInfo?.origin.name}</p> */}
      <p className="title-info">APARICION DE EPISODIOS</p>
      <p className="title-data">{residentInfo.episode?.length}</p>
    </article>
  )
}

export default ResidentInfo
