import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { setUnitsCart } from './quantityCart.slice'
import { setIsLoading } from './isLoading.slice'

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

export const addProductInCart = (data) => {
  const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

  return axios
    .post(URL, data, getConfig())
    .then((res) => {})
    .catch((err) => {
      console.log(err)
    })
}

export const deleteProductInCart = (id) => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${id}`
  dispatch(setIsLoading(true))
  return axios
    .delete(URL, getConfig())
    .then((res) => {})
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      dispatch(setIsLoading(false))
    })
}
