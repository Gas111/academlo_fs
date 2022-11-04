// id de ubicaciones van del 1 al 126
// el primero entregado en el primer renderizado debe ser aletorio.
// se agrega un input submit
// en la llamada podemos hacer un custom hook
// map con los residentes.
// crear un componente llamado ResidentInfo
// name,image,status, origin.name,episode.length

import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import ResidentInfo from './components/ResidentInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  const [location, setLocation] = useState('')
  // const [idLocation, setIdLocation] = useState('')

  // let numberLocation = ''

  // const handlerChange = (e) => {
  //   console.log(e.target.value)
  //   setIdLocation(e.target.value)
  // }

  useEffect(() => {
    const randomNumber = getRandomNumber(1, 126)
    let URL = `https://rickandmortyapi.com/api/location/${randomNumber}`

    if (location)
    URL = `https://rickandmortyapi.com/api/location/${location}`

    // const URL="https://rickandmortyapi.com/documentation/3get-a-single-location"
    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data)
      })
      .catch((err) => console.log(err))
  }, [location])

//   const idSelected=()=>{
//     const URL = `https://rickandmortyapi.com/api/location/${idLocation}`
//     axios
//     .get(URL)
//     .then((res) => {
//       setLocation(res.data)
//     })
//     .catch((err) => console.log(err))
// }

const handlerSumit=(e)=>{
  e.preventDefault()    
  setLocation(e.target.inputLocation.value)

}

  console.log(location)

  return (
    <div className="App">
      <header className="header">
        <img src="" alt="" />
      </header>
      <h1 className="title-aplication">Rick and Morty wiki</h1>
      <form action="" onSubmit={handlerSumit}>
        <input
          id="inputLocation"
          type="text"
          placeholder="type a location"
        />
        <button type="submit">Selected</button>
      </form>
      <h2>{location?.name}</h2>
      <p>
        <span>type:{location?.type}</span>
        <span>dimension:{location?.dimension}</span>
        <span>population:{location.residents?.length}</span>
      </p>
      {location.residents?.map((resident) => (
        <ResidentInfo key={resident} resident={resident} />
      ))}
    </div>
  )
}

export default App
