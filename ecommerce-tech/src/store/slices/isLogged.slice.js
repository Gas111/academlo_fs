import { createSlice } from '@reduxjs/toolkit'

export const isLogged = createSlice({
  name: 'isLogged',
  initialState: false,
  reducers: {
    setIsLogged: (state, action) => {
      const isLogged = action.payload
      return isLogged
    },
  },
})

export const {setIsLogged} = isLogged.actions
export default isLogged.reducer
