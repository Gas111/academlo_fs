import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPurchases from '../components/purchases/CardPurchases'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import { setIsLoading } from '../store/slices/isLoading.slice'
import getConfig from '../utils/getConfig'
import './styles/purchases.css'

const Purchases = () => {
  const [purchaseData, setPurchaseData] = useState()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.isLoading)

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/purchases`
    dispatch(setIsLoading(true))
    axios
      .get(URL, getConfig())
      .then((res) => {
        setPurchaseData(res.data.data.purchases)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        dispatch(setIsLoading(false))
      })
  }, [])

  return (
    <div className="purchases-page">
      <div className="purchases">
        <h2 className="purchases__title">My Purchases</h2>

        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <div className="purchases__container">
            {purchaseData?.map((purchase) => (
              <CardPurchases key={purchase.cart.id} purchase={purchase} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Purchases
