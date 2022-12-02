import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchFilters from '../components/home/SearchFilters'
import SearchInput from '../components/home/SearchInput'
import CardProduct from '../components/shared/CardProduct'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import { getAllProducts } from '../store/slices/products.slices'
import Cart from './Cart'
import './styles/home.css'

const Home = () => {
  const [categories, setCategories] = useState()

  const [filterCategory, setFilterCategory] = useState()
  const [filterCategoryClick, setFilterCategoryClick] = useState(false)

  const [inputText, setInputText] = useState()
  const [filterByText, setFilterByText] = useState()
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if (inputText) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(inputText.toLowerCase().trim()),
      )
      setFilterByText(result)
    } else {
      setFilterByText()
    }
  }, [inputText])

useEffect(() => {


}, [filterCategoryClick])



  return (
    <main className="home">
      <Header />

      <div className="home__container">
        <aside className="home__filters">
          <SearchFilters products={products}  setFilterCategory={setFilterCategory} setFilterCategoryClick={setFilterCategoryClick}/>
        </aside>
        <div className="home__container__search">
          <SearchInput inputText={inputText} setInputText={setInputText} />
        </div>
        <div className="home__container__cards">
          {filterByText
            ? filterByText?.map((product) => (
                <CardProduct key={product.id} product={product} />
              )) : filterCategoryClick ? filterCategory?.map((product) => (
                <CardProduct key={product.id} product={product} />
              )) : products?.map((product) => (
                <CardProduct key={product.id} product={product} /> 
              ))   }
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Home
