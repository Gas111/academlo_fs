import { createSlice } from '@reduxjs/toolkit'

export const allProducts = createSlice({
  name: 'allProducts',
  initialState: [],
  reducers: {
    setAllProducts: (state, action) => {
      const allproducts = action.payload
      return allproducts
    },
  },
})

export const {setAllProducts} = allProducts.actions
export default allProducts.reducer
