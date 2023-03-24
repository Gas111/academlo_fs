import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productsSlice = createSlice({
  name: 'products',
  initialState: null,

  reducers: {
    setProductsGlobal: (state, actions) => actions.payload,
    ascendingProducts: (state) => state.sort((a, b) => +a.price - +b.price),
    descendingProducts: (state) => state.sort((a, b) => +b.price - +a.price),
  },
})

export const { setProductsGlobal, descendingProducts } = productsSlice.actions
export const { ascendingProducts } = productsSlice.actions
export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
  const URLBASE = 'https://e-commerce-api.academlo.tech/api/v1/products'

  return axios
    .get(URLBASE)
    .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((err) => console.log(err))
}

export const getProductsByCategory = (id) => (dispatch) => {
  const URLBASE = `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`

  return axios
    .get(URLBASE)
    .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((err) => console.log(err))
}
