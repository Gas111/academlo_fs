import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderByPrice from '../components/home/OrderByPrice'
import SearchFilters from '../components/home/SearchFilters'
import SearchFilterByPrice from "../components/home/SearchFiterByPrice"
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

  const [isLoading, setIsLoading] = useState(true)


  const [filterByPrice, setFilterByPrice] = useState({from:0, to:Infinity})

  useEffect(() => {
    dispatch(getAllProducts())
    setIsLoading(false)
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
  }, [inputText,products])

const callbackFilterPrice=(product)=>{
return +product.price>=filterByPrice.from && +product.price<=filterByPrice.to
}

  return (
    <main className="home">
      <div className="home__container">
        <aside className="home__filters container-filters-price-and-categories">
          <SearchFilterByPrice setFilterByPrice={setFilterByPrice}/>
          <SearchFilters
            products={products}
            setFilterCategory={setFilterCategory}
            setFilterCategoryClick={setFilterCategoryClick}
          />
          <OrderByPrice/>
        </aside>
        <div className="home__container__search">
          <SearchInput inputText={inputText} setInputText={setInputText} />
        </div>
        <div className="home__container__cards">
          {filterByText?.filter(callbackFilterPrice).map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            {/* // : // : filterCategoryClick
            //   // ? filterCategory?.map((product) => (
            //   //     <CardProduct key={product.id} product={product} />
            //   //   ))
            //   products?.map((product) => (
            //     <CardProduct key={product.id} product={product} />
            //   ))} */}

        </div>
      </div>
    </main>
  )
}

export default Home
