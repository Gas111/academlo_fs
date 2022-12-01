import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchFilters from '../components/home/SearchFilters'
import SearchInput from '../components/home/SearchInput'
import CardProduct from '../components/shared/CardProduct'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import { getAllProducts } from '../store/slices/products.slices'
import './styles/home.css'

const Home = () => {
  const [filterChange, setfilterChange] = useState(false)

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (filterChange) {
      products = [...filterChange]
    } else {
      dispatch(getAllProducts())
    }
  }, [filterChange])

  return (
    <main className="home">
      <Header />

      <div className="home__container">
        <aside className="home__filters">
          <SearchFilters
            products={products}
            setfilterChange={setfilterChange}
          />
        </aside>
        <div className="home__container__search">
          <SearchInput />
        </div>
        <div className="home__container__cards">
          {products?.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Home
