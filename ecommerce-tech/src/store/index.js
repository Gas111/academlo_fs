import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slices"
import cart from "./slices/cart.slice"
import productsWithFilter from "./slices/productsWithFilter.slices"

export default configureStore({

reducer:{products, 

cart,productsWithFilter}

})