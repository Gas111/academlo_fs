import axios from 'axios'
import React, { useEffect, useState } from 'react'

const InputSelect = () => {

    const [typePokemons, setTypePokemons] = useState()
  
  const URL="https://pokeapi.co/api/v2/type/?limit=20"
  

useEffect(() => {

  axios.get(URL).then((result) => { setTypePokemons(result.data.results)}).catch((err) => { err=>console.log(err)
    
  });

}, [])

// console.log(typePokemons)

  return (
    <div>
        <select name="" id="">
            {typePokemons?.map(typePokemon =>(<option key={typePokemon.name}>{typePokemon.name}</option>))} 
        </select>
         
        </div>
  )
}

export default InputSelect