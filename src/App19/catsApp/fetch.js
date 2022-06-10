import React, { useContext } from 'react'
import { GetCatButton } from '../shared/styles'
import { ThemeContext } from '../themeContext'
import { ApiContext } from './context'

const GetCat = ({ setImage, breed }) => {
  const { darkMode } = useContext(ThemeContext)
  const { fetchCat } = useContext(ApiContext)

  const textColor = darkMode ? '#000' : '#fff'

  const handleResponse = (response, callback) => {
    const { data } = response

    callback(...data)
  }

  const handleFetch = (e, callback) => {
    e.preventDefault()

    const params = {
      breed_ids: breed
    }

    fetchCat(params, handleResponse)
  }

  return(
    <GetCatButton
      textColor={textColor}
      onClick={(e) => { handleFetch(e, setImage) }}
    >
      Get Cat
    </GetCatButton>
  )
}

export default GetCat
