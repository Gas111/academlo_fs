import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slices'
import cart from './slices/cart.slice'
import isLoading from './slices/isLoading.slice'
import quantityCart from './slices/quantityCart.slice'
import isLogged from './slices/isLogged.slice'
import categories from './slices/categories.slice'
import allProducts from './slices/allProducts.slice'


export default configureStore({
  reducer: {
    products,
    cart,
    isLoading,
    quantityCart,
    isLogged,
    categories,
    allProducts,
  
  },
})
