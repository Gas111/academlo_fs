import { createSlice } from '@reduxjs/toolkit'

export const quantityCart = createSlice({
  name: 'quantityCart',
  initialState: 0,
  reducers: {
    setUnitsCart: (state, action) => {
      const quantityCart = action.payload
      return quantityCart
    },
  },
})

export const { setUnitsCart } = quantityCart.actions
export default quantityCart.reducer
