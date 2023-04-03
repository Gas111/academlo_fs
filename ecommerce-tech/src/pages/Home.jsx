import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderByPrice from '../components/home/OrderByPrice'
import SearchFilters from '../components/home/SearchFilters'
import SearchFilterByPrice from '../components/home/SearchFiterByPrice'
import SearchInput from '../components/home/SearchInput'
import CardProduct from '../components/shared/CardProduct'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import { getAllProductsCart } from '../store/slices/cart.slice'
import { getAllProducts } from '../store/slices/products.slices'
import Cart from './Cart'
import './styles/home.css'
import { getAllCategories } from '../store/slices/categories.slice'
import { setUnitsCart } from '../store/slices/quantityCart.slice'

const Home = ({ unitsInCart }) => {
  const [categories, setCategories] = useState()
  const [filterCategory, setFilterCategory] = useState()
  const [filterCategoryClick, setFilterCategoryClick] = useState(false)

  const [inputText, setInputText] = useState()
  const [filterByText, setFilterByText] = useState()
  const products = useSelector((state) => state.products)
  const isLoading = useSelector((state) => state.isLoading)
  const qtyCart = useSelector((state) => state.quantityCart)
  const cart = useSelector((state) => state.cart)
  const categoriesSlice = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  let [filterByPrice, setFilterByPrice] = useState({ from: 0, to: Infinity })

  useEffect(() => {
  if(!products){
      dispatch(getAllProducts())
      dispatch(getAllCategories())
      dispatch(getAllProductsCart())
  }
  
console.log(qtyCart)
  }, [])

  useEffect(() => {
    if (inputText) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(inputText.toLowerCase().trim()),
      )
      setFilterByText(result)
    } else {
      setFilterByText(products)
    }
  }, [inputText, products])

  return (
    <main className="home">
      <div className="home__container">
        <aside className="home__filters container-filters-price-and-categories">
          {/* <SearchFilterByPrice setFilterByPrice={setFilterByPrice} /> */}
          <SearchFilters
            key={products}
            products={products}
            setFilterCategory={setFilterCategory}
            setFilterCategoryClick={setFilterCategoryClick}
            categoriesSlice={categoriesSlice}
          />
          <OrderByPrice />
        </aside>
        <div className="home__container__search">
          <SearchInput inputText={inputText} setInputText={setInputText} />
        </div>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <div className="home__container__cards">
            {filterByText?.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
                category={product.category.id}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
