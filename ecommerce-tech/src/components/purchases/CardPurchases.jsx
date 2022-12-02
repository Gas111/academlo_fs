import React, { useEffect, useState } from 'react'
import "./styles/cardPurchases.css"

const CardPurchases = ({ purchase }) => {

const [dateString, setDateString] = useState()


useEffect(() => {
    const date = new Date(`${purchase.updatedAt}`)
setDateString(date.toDateString());

}, [])





  return (
    <article className='card-purchases'>
      <header className='card-purchases__date'>{dateString}</header>
      <section className='card-purchases__section'>
        {purchase.cart.products.map((product) => (
          <section className='card-purchases__container' key={product.id}>
            <span className='card-purchases__title'>{product.title}</span>
            <span className='card-purchases__qty'>{product.productsInCart.quantity}</span>
            <span className='card-purchases__price'>{product.price}</span>
         </section>
        ))}
      </section>
    
    </article>
  )
}

export default CardPurchases
