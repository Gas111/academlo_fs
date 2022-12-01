import axios from 'axios'
import React, { useEffect } from 'react'

const useGetData = (URL, config) => {
  if (config) {
    useEffect(() => {
      axios
        .get(URL, config)
        .then((res) => res.data
        )
        .catch((err) => {
          console.log(err)
        })
    }, [])
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

export default useGetData
