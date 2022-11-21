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
      // console.log('selectedtypes', URL)
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
   
     
        const URL = `https://pokeapi.co/api/v2/pokemon/?limit=200`
        axios
          .get(URL)
          .then((res) => {
            setPokemons(res.data.results)
            dispatch(setPokemonsLengthGlobal(res.data.results.length))
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
          })

       
      }
    }
  , [selectedURLPokemons])



const initialIndex=(pageSelected*cardsForPage)
const finalIndex=((pageSelected+1)*cardsForPage)

console.log(pokemons)


  return (
    <section className="section-pokecards">
      {isLoading
        ? 'loading'
        : pokemons?.slice(initialIndex,finalIndex).map((pokemon) => (
            <PokeCard pokemon={pokemon} key={pokemon.name} />
          ))}
    </section>
  )
}

export default ElementsPokedex
