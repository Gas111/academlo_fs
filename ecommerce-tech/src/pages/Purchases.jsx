import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/shared/Header'
import getConfig from '../utils/getConfig'




const Purchases = () => {

const [purchaseData, setPurchaseData] = useState()

  useEffect(() => {
 
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
    axios
      .get(URL,getConfig())
      .then((res) => {
        setPurchaseData(res.data.data.purchases)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(purchaseData)


  
  return (
    <div>
         <Header/>
{purchaseData?.map((purchase)=>(<div> <div>{purchase.cart.products[0]}</div><hr />
<div>{purchase.cart.products[0].title}</div></div>))}

    </div>
  )
}

export default Purchases