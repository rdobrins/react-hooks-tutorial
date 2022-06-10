import React, { useState, useEffect, useContext } from 'react'
import Select from 'react-select'
import { axiosClient } from './client'
import { CatsContext } from './catsContext'
import {
  BREEDS_SUB_DIRECTORY,
  API_KEY
} from './env'

const BreedsDropdown = () => {
  const { breed, setBreed } = useContext(CatsContext)

  const [breedsList, setBreedsList] = useState([])

  const fetchBreeds = () => {
    const params = {
      api_key: API_KEY
    }

    return axiosClient.get(BREEDS_SUB_DIRECTORY, { params: params })
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
    const { value } = option || { value: null }

    setBreed(value)
  }

  return(
    <Select
      options={breedsList}
      onChange={(v) => { handleChange(v) }}
      isClearable
    />
  )
}

export default BreedsDropdown
