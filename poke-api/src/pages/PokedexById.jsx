import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonConfig from '../components/shared/ButtonConfig'
import '../styles/pokedexById.css'
import BackButton from '../components/shared/BackButton'

import Pokemon404 from '../components/pokedexId/Pokemon404'

const PokedexById = () => {
 

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/' + id

    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  }

  return (
    <section className="body-pokedex">
      <BackButton navigateTo={`/pokedex/`} />
      <main className="main">
        <img
          className="main__img"
          src={pokemon?.sprites.other['official-artwork'].front_default}
          alt="image pokemon"
        />

        <div className="main__box">
          <div className="main__info">
            <span>{pokemon?.weigth}</span>
            <h6>Weigth</h6>
          </div>
          <div className="main__info">
            <span>{pokemon?.heigth}</span>
            <h6>Heigth</h6>
          </div>
        </div>

        <div className="main__title">
          <div className="main__line"></div>
          <h1>{pokemon?.name}</h1>
          <div className="main__line"></div>
        </div>

        <div className="main__id">#{pokemon?.id}</div>
      </main>

      <section className="section-type-abilities">
        <section className="type">
          <div className="title">
            <div className="type__line"></div>
            <h2>Type</h2>
            <div className="type__line"></div>
          </div>
          <div className="type__items">
            {pokemon?.types.map((type) => (
              <div className="type__item">{type.type.name}</div>
            ))}
          </div>
        </section>

        <section className="abilities">
          <div className="title">
            <div className="abilities__line"></div>
            <h2>Abilities</h2>
            <div className="abilities__line"></div>
          </div>
          <div className="abilities__items">
            {pokemon?.abilities.map((ability) => (
              <div className="abilities__item">{ability.ability.name}</div>
            ))}
          </div>
        </section>
      </section>
      <section className="stats-base">
        <div className="title">
          <div className="stats__line"></div>
          <h2>Stats Base</h2>
          <div className="stats__line"></div>
        </div>
        <div>
          {pokemon?.stats.map((stat) => (
            <div>
              {' '}
              <span>{stat.stat.name} :</span> <div>{stat.base_stat}</div>
            </div>
          ))}{' '}
        </div>
      </section>

      <section className="movements">
        <button>
          <i></i>Encounters
        </button>
        <div className="title">
          <div className="movements__line"></div>
          <h2>Movements</h2>
          <div className="movements__line"></div>
        </div>
        <div>
          {pokemon?.moves.map((move) => (
            <div>
              {' '}
              <span>{move.move.name}</span>
            </div>
          ))}
        </div>
        <div></div>
      </section>
      <ButtonConfig />
    </section>
  )
}

export default PokedexById
