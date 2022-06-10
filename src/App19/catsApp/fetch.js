import React, { useContext } from 'react'
import { GetCatButton } from '../shared/styles'
import { ThemeContext } from '../themeContext'
import { ApiContext } from './apiContext'
import { CatsContext } from './catsContext'

const GetCat = () => {
  const { setImages, breed } = useContext(CatsContext)
  const { darkMode } = useContext(ThemeContext)
  const { fetchCats } = useContext(ApiContext)

  const textColor = darkMode ? '#000' : '#fff'

  const handleResponse = (response) => {
    const { data } = response

    setImages(data)
  }

  const handleFetch = (e) => {
    e.preventDefault()

    const params = {
      breed_ids: breed,
      limit: 3
    }

    fetchCats(params, handleResponse)
  }

  return(
    <GetCatButton
      textColor={textColor}
      onClick={(e) => { handleFetch(e) }}
    >
      Get Cat
    </GetCatButton>
  )
}

export default GetCat
