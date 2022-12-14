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
import Madeby from './components/Madeby'

function App() {
  const [location, setLocation] = useState('')
  const [arrayResident, setArrayResident] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)
  const [page, setPage] = useState(1)
  const [showFilter, setShowFilter] = useState(true)

  useEffect(() => {
    const randomNumber = getRandomNumber(1, 126)
    let URL = `https://rickandmortyapi.com/api/location/${randomNumber}`

    if (location) {
      URL = `https://rickandmortyapi.com/api/location/${location}`
      if (location > 127 || location < 1) {
        alert('ingrese numero de 1 a 126')
      }
    }

    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data)
      })
      .catch((err) => setHasError(true))
  }, [location])

  const handlerSumit = (e) => {
    e.preventDefault()
    setLocation(e.target.inputLocation.value)
    setShowFilter(true)
  }

  const handlerClickInput=()=>{

    setShowFilter(false)

  }


  const handlerChange = (e) => {

    if (e.target.value === '') {
      return setSuggestedList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
    axios
      .get(URL)
      .then((res) => {
        setSuggestedList(res.data.results)
        setShowFilter(true)
      })
      .catch((err) => console.log(err))
  }

  const sendPages = (resident, i) => {
    let quantityPages = parseInt(location.residents.length / 10)
    const restPages = parseFloat(location.residents.length / 10)
    if (restPages > 0) {
      ++quantityPages
    }

    let array = [...location.residents]
    let indexMin = 0
    let indexMax = 10

    if (page == 1) {
      array = array.slice(indexMin, indexMax)
    } else {
      indexMin = page * 10 - 10
      indexMax = page * 10
      array = array.slice(indexMin, indexMax)
    }

    if (array[i]) {
      return <ResidentInfo resident={array[i]} />
    }
  }


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
          autoComplete="off"
          placeholder="type a location"
          onChange={handlerChange}
          onClick={handlerClickInput}
        />
        <button type="submit">Selected</button>
        <FilterList suggestedList={suggestedList} setLocation={setLocation} setShowFilter={setShowFilter} showFilter={showFilter} />
      
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
        {location.residents?.map((resident, i) => (i<10 && <div key={resident}>{sendPages(resident, i)}</div>))}
    
      {/* al poner el key con el div me esta creando divs  */}
      
      </section>
      <section className="box-buttons">
        <ButtonPages
          quantityResidents={location.residents?.length}
          key={ResidentInfo?.id}
          setPage={setPage}
          location={location}
        />
      </section>
      <section className="box-made-by">
        <Madeby />
      </section>
    </div>
  )
}

export default App
