import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productsWithFilterSlice = createSlice({
  name: 'productsWithFilter',
  initialState: null,

  reducers: {
    setProductsWithFilterGlobal: (state, actions) => actions.payload,
  },
})
export const { setProductsWithFilterGlobal } = productsWithFilterSlice.actions

export default productsWithFilterSlice.reducer

export const getAllProducts = () => (dispatch) => {
  const URLBASE = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'

  return axios
    .get(URLBASE)
    .then((res) => dispatch(setProductsGlobal(res.data.data.productsWithFilter)))
    .catch((err) =>  console.log(err))
}



