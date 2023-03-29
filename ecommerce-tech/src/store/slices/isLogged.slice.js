import { createSlice } from '@reduxjs/toolkit'

export const isLogged = createSlice({
  name: 'isLogged',
  initialState: true,
  reducers: {
    setIsLogged: (state, action) => {
      const isLogged = action.payload
      return isLogged
    },
  },
})

export const {setIsLogged} = isLogged.actions
export default isLogged.reducer
