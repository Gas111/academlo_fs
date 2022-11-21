import React from 'react'
import { useSelector } from 'react-redux'

import "../../styles/paginationButtons.css"

const PaginationButtons = ({setPageSelected}) => {

    
    const quantityCardsForPages=useSelector((state)=>(state.cardsForPage))

    const pokemonsLength = useSelector((state) => state.pokemonsLength)

    const arrayButtons=[]

for (let i =1;i<=((pokemonsLength)/quantityCardsForPages);i++)
{arrayButtons[i-1]=i
}



  return (
    <section className='pagination-buttons'>
        {arrayButtons.map(button =>(<div className='button-page' key={button}>{button}</div>))}
        
       </section>
  )
}

export default PaginationButtons