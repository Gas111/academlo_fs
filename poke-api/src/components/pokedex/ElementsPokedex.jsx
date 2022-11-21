import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokeCard from '../pokecard/PokeCard'
import '../../styles/elementsPokedex.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonsLengthGlobal } from '../../store/slices/pokemonsLength.slice'

const ElementsPokedex = ({ selectedURLPokemons, pageSelected }) => {
  const dispatch = useDispatch()
  const cardsForPage = useSelector((state) => state.cardsForPage)
  const [isLoading, setIsLoading] = useState(true)

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    if (selectedURLPokemons !== 'All Pokemons') {
      const URL = `${selectedURLPokemons}`
      console.log('selectedtypes', URL)
      axios
        .get(URL)
        .then((res) => {
          setPokemons(res.data.pokemon.map((poke) => poke.pokemon))
          dispatch(setPokemonsLengthGlobal(res.data.pokemon.length))
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
   
      if (!pageSelected) {
        let URL = `https://pokeapi.co/api/v2/pokemon`
        axios
          .get(URL)
          .then((res) => {
            dispatch(setPokemonsLengthGlobal(res.data.results.length))
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })

        URL = `https://pokeapi.co/api/v2/pokemon?limit=${cardsForPage}&offset=${pageSelected}`

        axios
          .get(URL)
          .then((res) => {
            setPokemons(res.data.results)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        URL = `https://pokeapi.co/api/v2/pokemon?limit=${cardsForPage}&offset=${pageSelected*cardsForPage}`
    

        axios
          .get(URL)
          .then((res) => {
            setPokemons(res.data.results)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }, [selectedURLPokemons, pageSelected])

  return (
    <section className="section-pokecards">
      {isLoading
        ? 'loading'
        : pokemons?.map((pokemon) => (
            <PokeCard pokemon={pokemon} key={pokemon.name} />
          ))}
    </section>
  )
}

export default ElementsPokedex
