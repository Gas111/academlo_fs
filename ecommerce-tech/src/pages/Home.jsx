import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchFilters from '../components/home/SearchFilters'
import SearchInput from '../components/home/SearchInput'
import CardProduct from '../components/shared/CardProduct'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import { getAllProducts } from '../store/slices/products.slices'
import "./styles/home.css"

const Home = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <main className="home">
      <Header/>
     
      <div className="home__container"> 
      <aside className="home__filters">
        <SearchFilters products={products}/>
      </aside>
      <div className="home__container__search"><SearchInput/></div>
      <div className="home__container__cards"> 
       {products?.map((product) => (<CardProduct key={product.id} product={product}/>)
          
        )} 
      </div>   
      </div>

      <Footer/>
    </main>
  )
}

export default Home
