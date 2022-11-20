import React from 'react'
import { useSelector } from 'react-redux'
import ElementsPokedex from '../components/pokedex/ElementsPokedex'
import InputSearch from '../components/pokedex/InputSearch'
import InputSelect from '../components/pokedex/InputSelect'
import ButtonConfig from '../components/shared/ButtonConfig'
import PokeBall from '../components/shared/PokeBall'
import InputCheckbox from '../components/shared/InputCheckbox'
import '../styles/pokedex.css'
const Pokedex = () => {
  const userName = useSelector((state) => state.userName)

  return (
    <main>
      <h1 className="title-pokedex">Pokedex</h1>
      <p className="welcome-pokedex" >{`Welcome ${userName}, here you can find your favorite pokemon`}</p>
      <section className="main__inputs">
        <InputCheckbox />
        <InputSearch />
        <InputSelect />
      </section>
      <ElementsPokedex />
      <PokeBall />
      <ButtonConfig />
    </main>
  )
}

export default Pokedex
