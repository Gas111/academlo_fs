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
import ButtonPages from './components/ButtonPages'
import ResidentInfo from './components/ResidentInfo'
import getRandomNumber from './utils/getRandomNumber'
import FilterList from './components/FilterList'



function App() {
  const [location, setLocation] = useState('')
  const [arrayResident, setArrayResident] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)

  // let numberLocation = ''
  // const handlerChange = (e) => {
  //   console.log(e.target.value)
  //   setIdLocation(e.target.value)
  // }
  useEffect(() => {
    const randomNumber = getRandomNumber(1, 126)
    let URL = `https://rickandmortyapi.com/api/location/${randomNumber}`

    if (location) {
      URL = `https://rickandmortyapi.com/api/location/${location}`
      if (location > 127 || location < 1) {
        alert('ingrese numero de 1 a 126')
      }
     
    }

  
    // const URL="https://rickandmortyapi.com/documentation/3get-a-single-location"
    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data)
      })
      .catch((err) => setHasError(true))
  }, [location])

  //   const idSelected=()=>{


  const handlerSumit = (e) => {
    e.preventDefault()
    setLocation(e.target.inputLocation.value)


    
  }


  const arrayOfPage = (resident, index) => {
    console.log('aca mirpmio ', resident, index)
    return `<ResidentInfo key=${resident} resident=${resident}/>`
  }

const handlerChange=(e)=>{
  if(e.target.value===""){

  return  setSuggestedList()

  }
  const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
  axios
  .get(URL)
  .then((res) => {
    setSuggestedList(res.data.results)
  })
  .catch((err) => console.log(err))
}

console.log(suggestedList)


  return (
    <div className="App">
      <header className="header">
        <img src="" alt="" />
      </header>
      <h1 className="title-aplication">Rick and Morty wiki</h1>
      <form action="" onSubmit={handlerSumit}>
        <input id="inputLocation" type="text" placeholder="type a location" onChange={handlerChange}/>
        <button type="submit">Selected</button>
      <FilterList suggestedList={suggestedList} setLocation={setLocation}/>
      </form>
      <h2>{location?.name}</h2>
      <p className="information">
        <span>
          <b>Type: </b>
          {location?.type}
        </span>
        <span>
          <b>Dimension: </b>
          {location?.dimension}
        </span>
        <span>
          <b>Population: </b>
          {location.residents?.length}
        </span>
      </p>

      <section className="articles">
        {location.residents?.map(resident => (<ResidentInfo key={resident} resident={resident}/>))
         
        }
      </section>
      <section className="box-buttons">
        <ButtonPages quantityResidents={location.residents?.length} />
      </section>
    </div>
  )
}

export default App
