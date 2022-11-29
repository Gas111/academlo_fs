import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slices"
import cart from "./slices/cart.slice"
export default configureStore({

reducer:{products, 

cart}

})