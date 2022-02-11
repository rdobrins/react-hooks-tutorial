import React, { createContext } from 'react'
import { axiosClient } from './client'
import { IMAGES_SUB_DIRECTORY, API_KEY } from './env'

const ApiContext = createContext()

export const ApiProvider = (props) => {
  const { children } = props

  const fetchImages = (callback, params) => {
    const fetchParams = { params: { ...params, api_key: API_KEY } }

    return axiosClient.get(IMAGES_SUB_DIRECTORY, fetchParams)
      .then(response => { callback(response) })
      .catch(error => { console.log(error) })
  }

  return(
    <ApiContext.Provider value={{ fetchImages }}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiContext
