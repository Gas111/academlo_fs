import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productsSlice = createSlice({
  name: 'products',
  initialState: null,

  reducers: {
    setProductsGlobal: (state, actions) => actions.payload,
  },
})
export const { setProductsGlobal } = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
  const URLBASE = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'

  return axios
    .get(URLBASE)
    .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((err) =>  console.log(err))
}



