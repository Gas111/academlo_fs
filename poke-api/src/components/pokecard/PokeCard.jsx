import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../../styles/pokeCard.css'
import { useNavigate } from 'react-router-dom'

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/'

const PokeCard = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState()

  const URL = URL_BASE + pokemon.name + '/'

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPokemonInfo(res.data))
      .catch((err) => console.log(err))
  }, [])


  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemonInfo.name}`)
  }

  return (
    <article
      className={`pokecard bg-${pokemonInfo?.types[0].type.name}`}
      onClick={handleClick}
    >
      <h3>{pokemonInfo?.name}</h3>

      <p>
        <span
          className={`pokecard__information bg-i-${pokemonInfo?.types[0].type.name}`}
        >
          Types:
          <span>
            {pokemonInfo?.types.map((type) => ` ${type.type.name}, `)}
          </span>
        </span>
      </p>

      <p>
        <span
          className={`pokecard__information bg-i-${pokemonInfo?.types[0].type.name}`}
        >
          hp: <span>{pokemonInfo?.stats[0].base_stat}</span>
        </span>
      </p>
      <p>
        <span
          className={`pokecard__information bg-i-${pokemonInfo?.types[0].type.name}`}
        >
          attack: <span>{pokemonInfo?.stats[1].base_stat}</span>
        </span>
      </p>
      <p>
        <span
          className={`pokecard__information bg-i-${pokemonInfo?.types[0].type.name}`}
        >
          defense: <span>{pokemonInfo?.stats[2].base_stat}</span>
        </span>
      </p>
      <p>
        <span
          className={`pokecard__information bg-i-${pokemonInfo?.types[0].type.name}`}
        >
          speed: <span>{pokemonInfo?.stats[5].base_stat}</span>
        </span>
      </p>
      <div className="poke-image">
        <img
          src={pokemonInfo?.sprites.other['official-artwork'].front_default}
          alt="image pokemon"
        />
      </div>
    </article>
  )
}

export default PokeCard
