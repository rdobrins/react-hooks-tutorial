import React, { useState, createContext, useContext, useEffect } from 'react'
import { ApiContext } from './apiContext'

export const CatsContext = createContext()

export const CatsProvider = (props) => {
  const { children, breed = null } = props

  const { fetchCats } = useContext(ApiContext)

  const [images, setImages] = useState([])
  // const [breed, setBreed] = useState(newBreed)

  const handleBreedChangeResponse = (response) => {
    const { data } = response

    setImages(data)
  }

  const handleBreedChange = () => {
    const params = {
      breed_ids: breed,
      limit: 2
    }

    fetchCats(params, handleBreedChangeResponse)
  }

  useEffect(() => {
    handleBreedChange()
  }, [breed])

  return(
    <CatsContext.Provider value={{
      images,
      setImages,
      breed
    }}>
      {children}
    </CatsContext.Provider>
  )
}
