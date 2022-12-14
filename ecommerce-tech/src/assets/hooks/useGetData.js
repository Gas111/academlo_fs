import axios from 'axios'
import React, { useEffect } from 'react'

const usePostData = (URL,data,config) => {
  if (config) {
   
      axios
        .get(URL,data,config)
        .then((res) => res.data
        )
        .catch((err) => {
          console.log(err)
        })
   
  } else {

    useEffect(() => {
      axios
        .get(URL)
        .then((res) => res.data
        )
        .catch((err) => {
          console.log(err)
        })
    }, [])
  }
}

export default usePostData
