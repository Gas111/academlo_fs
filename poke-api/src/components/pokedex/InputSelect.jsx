import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../styles/inputSelect.css'

const InputSelect = ({ setSelectedURLPokemons, setPageSelected}) => {
  const [typePokemons, setTypePokemons] = useState()

  const URL = 'https://pokeapi.co/api/v2/type/'

  useEffect(() => {
    axios
      .get(URL)
      .then((result) => {
        setTypePokemons(result.data.results)
      })
      .catch((err) => {
        ;(err) => console.log(err)
      })
  }, [])

  const handleChangeSelect = (e) => {
    setSelectedURLPokemons(e.target.value)
    setPageSelected(1)

  }

  return (
    <div>
      <select onChange={handleChangeSelect} className="input-select" name="">
        <option value="All Pokemons">All Pokemons</option>

        {typePokemons?.map((typePokemon) => (
          <option key={typePokemon.name} value={typePokemon.url}>
            {typePokemon.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect
