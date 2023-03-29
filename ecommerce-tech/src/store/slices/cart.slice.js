import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { setUnitsCart } from './quantityCart.slice'

const cartSlice = createSlice({
  name: 'cart',
  initialState: null,

  reducers: {
    setCartGlobal: (state, actions) => actions.payload,
  },
})

export const { setCartGlobal } = cartSlice.actions

export default cartSlice.reducer

export const getAllProductsCart = () => (dispatch) => {
  const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

  return axios
    .get(URL, getConfig())
    .then((res) => {
      dispatch(setCartGlobal(res.data.data.cart.products))
      dispatch(setUnitsCart(res.data.data.cart.products.length))
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {})
}

export const addProductInCart = () => (dispatch) => {
  const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

  return axios
    .get(URL, getConfig())
    .then((res) => {})
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {})
}
