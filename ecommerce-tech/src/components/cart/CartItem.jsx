import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import "./styles/cartItem.css"

const CartItem = ({product}) => {


const dispatch=  useDispatch()
const handleButtonDelete = (id) => {
  
  const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`
  
 axios.delete(URL,getConfig()).then((res) => 
  dispatch(getAllProductsCart())
      
  ).catch((err) => {console.log(err)})

}

  return (
    <article className='cart-item'>
        <h1>{product.title}</h1>
        <div><span>Price:</span><span>{product.price}</span></div>
        <div><span>Quantity:</span><span> {product.productsInCart.quantity}</span></div>
        <div className='cart-container-button'><button onClick={()=>handleButtonDelete(product.id)} className='button-delete'><i className="fa-solid fa-trash"></i></button></div>        
    </article>
  )
}

export default CartItem