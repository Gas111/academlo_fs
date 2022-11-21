import {configureStore} from "@reduxjs/toolkit"
import userName from "./slices/username.slice"
import pokemonsLength from "./slices/pokemonsLength.slice"
import cardsForPage from "./slices/cardsForPage.slice"
import changeBgcDark from "./slices/changeBgc.slice"


export default configureStore({
reducer:{

    userName,
    pokemonsLength,
    cardsForPage,
    changeBgcDark,
    
}
})

