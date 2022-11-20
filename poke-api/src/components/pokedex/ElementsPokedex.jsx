import React, { useEffect, useState } from 'react'
import axios from "axios"
import PokeCard from '../pokecard/PokeCard'
import "../../styles/elementsPokedex.css"

const ElementsPokedex = () => {

const [pokemons, setPokemons] = useState()


useEffect(() => {
const URL="https://pokeapi.co/api/v2/pokemon/?limit=20"

axios.get(URL).then((res) => {setPokemons(res.data.results)
  
}).catch((err) => {console.log(err)});
  
}, [])



  return (
    <section className='section-pokecards'>
      {pokemons?.map(pokemon =>(<PokeCard pokemon={pokemon} key={pokemon.name}/>))}
      </section>
  )
}

export default ElementsPokedex