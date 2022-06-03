import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { axiosClient } from './client'
import {
  BREEDS_SUB_DIRECTORY,
  API_KEY
} from './env'

const BreedsDropdown = (props) => {
  const { breed, setBreed } = props

  const [breedsList, setBreedsList] = useState([])

  const fetchBreeds = () => {
    const params = {
      api_key: API_KEY
    }

    return axiosClient.get(BREEDS_SUB_DIRECTORY, params)
  }

  const handleResponse = (response, callback) => {
    const { data } = response

    const selectOptions = data.map((breed) => {
      const { id, name } = breed

      return({ value: id, label: name })
    })

    callback(selectOptions)
  }

  useEffect(() => {
    fetchBreeds()
      .then(response => { handleResponse(response, setBreedsList) })
      .catch(error => { console.log(error) })
  }, [])

  const handleChange = (option) => {
    const { value } = option

    setBreed(value)
  }

  return(
    <Select
      options={breedsList}
      onChange={(v) => { handleChange(v) }}
    />
  )
}

export default BreedsDropdown
