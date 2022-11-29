import axios from 'axios'
import React, { useEffect } from 'react'

const useGetData = (URL,config) => {

useEffect(() => {
    console.log(URL)
    console.log(config)
    
   axios.get(URL,config).then((res) => {console.log(res.data); return res.data;
    
   }).catch((err) => {console.log(err)
    
   });
   
    }
    , [])
    
}

export default useGetData