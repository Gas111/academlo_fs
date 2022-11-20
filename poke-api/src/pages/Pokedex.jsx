import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ElementsPokedex from '../components/pokedex/ElementsPokedex'
import InputSearch from '../components/pokedex/InputSearch'
import InputSelect from '../components/pokedex/InputSelect'
import ButtonConfig from '../components/shared/ButtonConfig'
import PokeBall from '../components/shared/PokeBall'
import InputCheckbox from '../components/shared/InputCheckbox'
import '../styles/pokedex.css'
import BackButton from '../components/shared/BackButton'
const Pokedex = () => {
  const userName = useSelector((state) => state.userName)

  const [stateCheckbox, setStateCheckbox] = useState(false)

  return (
    <main>
      <BackButton navigateTo={`/`}/>
      <h1 className="title-pokedex">Pokedex</h1>
      <p className="welcome-pokedex" >{`Welcome ${userName}, here you can find your favorite pokemon`}</p>
      <section className="main__inputs">
        <InputCheckbox stateCheckboxs ={stateCheckbox}  setStateCheckbox={setStateCheckbox}/>
        {stateCheckbox ? <InputSearch/>: <InputSelect />}
      </section>
      <ElementsPokedex />
      <PokeBall />
      <ButtonConfig />
    </main>
  )
}

export default Pokedex
