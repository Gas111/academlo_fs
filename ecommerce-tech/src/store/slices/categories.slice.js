import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsLoading } from './isLoading.slice'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: null,

  reducers: {
    setCategoriesGlobal: (state, actions) => actions.payload,
  },
})

export const { setCategoriesGlobal } = categoriesSlice.actions
export default categoriesSlice.reducer

export const getAllCategories = () => (dispatch) => {
  const URLBASE =
    'https://e-commerce-api.academlo.tech/api/v1/products/categories'

  dispatch(setIsLoading(true))
  return axios
    .get(URLBASE)
    .then((res) => {
      dispatch(setCategoriesGlobal(res.data.data.categories))
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => dispatch(setIsLoading(false)))
}

// export const getCategorieById = (id) => (dispatch) => {
//   const URLBASE = `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`

//   return axios
//     .get(URLBASE)
//     .then((res) => dispatch(setProductsGlobal(res.data.data.products)))
//     .catch((err) => console.log(err))
// }
