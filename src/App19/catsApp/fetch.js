import React, { useContext } from 'react'
import { GetCatButton } from '../shared/styles'
import { axiosClient } from './client'
import { ThemeContext } from '../context'
import {
  IMAGES_SUB_DIRECTORY,
  API_KEY
} from './env'

const fetchCat = () => {
  const params = {
    api_key: API_KEY
  }

  return axiosClient.get(IMAGES_SUB_DIRECTORY, params)
}

const handleResponse = (response, callback) => {
  const { data } = response

  callback(...data)
}

const handleFetch = (e, callback) => {
  e.preventDefault()

  fetchCat()
    .then(response => { handleResponse(response, callback) })
    .catch(error => { console.log(error) })
}

const GetCat = ({ setImage }) => {
  const { darkMode } = useContext(ThemeContext)

  const textColor = darkMode ? '#000' : '#fff'

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
