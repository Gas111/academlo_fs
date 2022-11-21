import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ElementsPokedex from '../components/pokedex/ElementsPokedex'
import InputSearch from '../components/pokedex/InputSearch'
import InputSelect from '../components/pokedex/InputSelect'
import ButtonConfig from '../components/shared/ButtonConfig'
import PokeBall from '../components/shared/PokeBall'
import InputCheckbox from '../components/shared/InputCheckbox'
import '../styles/pokedex.css'
import BackButton from '../components/shared/BackButton'

import stateCheckbox from '../components/shared/InputCheckbox'
import PaginationButtons from '../components/pokedex/PaginationButtons'

const Pokedex = () => {
  const userName = useSelector((state) => state.userName)
 
  const [stateCheckbox, setStateCheckbox] = useState(false)

  const [selectedURLPokemons, setSelectedURLPokemons] = useState('All Pokemons')

  const [pageSelected, setPageSelected] = useState()

  return (
    <main>
      <BackButton navigateTo={`/`} />
      <h1 className="title-pokedex">Pokedex</h1>
      <p className="welcome-pokedex">{`Welcome ${userName}, here you can find your favorite pokemon`}</p>
      <section className="main__inputs">
        <div className="element-checkbox">
      <span>Type</span><InputCheckbox setStateCheckbox={setStateCheckbox} /><span>Pokemon</span></div>
        {stateCheckbox ? (
          <InputSelect setSelectedURLPokemons={setSelectedURLPokemons} />
        ) : (
          <InputSearch />
        )}
      </section>
      <ElementsPokedex selectedURLPokemons={selectedURLPokemons} pageSelected={pageSelected}/>
      <PokeBall />
      <PaginationButtons setPageSelected={setPageSelected}/>
      <ButtonConfig />

    </main>
  )
}

export default Pokedex
