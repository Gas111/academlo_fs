import React from 'react'

const CartItem = ({product}) => {
  return (
    <article>
        <h1>{product.title}</h1>
        <div><span>Price:</span><span>{product.price}</span></div>

        {/* <div><span>Quantity:</span><span> {product.productsInCart.quantity}</span></div> */}
        
    </article>
  )
}

export default CartItem