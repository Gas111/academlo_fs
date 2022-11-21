import { createSlice } from "@reduxjs/toolkit";

const pokemonsLengthSlice=createSlice({
    name: 'pokemonsLength',
    initialState: '1',
    reducers: {
      setPokemonsLengthGlobal: (state, action) => action.payload

}
}
)

export const {setPokemonsLengthGlobal}=pokemonsLengthSlice.actions

export default pokemonsLengthSlice.reducer




