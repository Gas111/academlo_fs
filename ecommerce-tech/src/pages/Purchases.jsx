import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardPurchases from '../components/purchases/CardPurchases'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import getConfig from '../utils/getConfig'
import "./styles/purchases.css"

const Purchases = () => {
  const [purchaseData, setPurchaseData] = useState()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
    axios
      .get(URL, getConfig())
      .then((res) => {
        setPurchaseData(res.data.data.purchases)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(purchaseData)

  return (
    <div className="purchases-page">
      <Header />
      <div className="purchases">
        <h2 className="purchases__title">My Purchases</h2>
        <div className="purchases__container">
          {purchaseData?.map((purchase) => (
            <CardPurchases key={purchase.cart.id} purchase={purchase} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Purchases
