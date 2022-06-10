import React, { useState, createContext } from 'react'
import { axiosClient } from './client'
import {
  IMAGES_SUB_DIRECTORY,
  API_KEY
} from './env'


export const ApiContext = createContext()

export const ApiProvider = (props) => {
  const { children } = props

  const fetchCats = (params, handleResponse) => {
    return axiosClient.get(IMAGES_SUB_DIRECTORY, { params: { ...params, api_key: API_KEY } })
      .then(response => { handleResponse(response) })
      .catch(error => { console.log(error) })
  }

  return(
    <ApiContext.Provider value={{
      fetchCats
    }}>
      {children}
    </ApiContext.Provider>
  )
}
