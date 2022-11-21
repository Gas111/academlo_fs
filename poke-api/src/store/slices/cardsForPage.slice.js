import { createSlice } from "@reduxjs/toolkit";

const cardsForPageSlice=createSlice({
    name: 'cardsForPage',
    initialState: '4',
    reducers: {
      setCardsForPageGlobal: (state, action) => action.payload

}
}
)

export const {setCardsForPageGlobal}=cardsForPageSlice.actions

export default cardsForPageSlice.reducer




