import React, { useState, useEffect, useContext } from 'react'
import Select from 'react-select'
import { axiosClient } from './client'
import { CatsContext } from './catsContext'
import {
  BREEDS_SUB_DIRECTORY,
  API_KEY
} from './env'
import { useHistory } from 'react-router-dom'

const BreedsDropdown = () => {
  const { breed } = useContext(CatsContext)
  const history = useHistory()

  const [breedsList, setBreedsList] = useState([])

  const fetchBreeds = () => {
    const params = {
      api_key: API_KEY
    }

    return axiosClient.get(BREEDS_SUB_DIRECTORY, { params: params })
  }

  const handleResponse = (response, callback) => {
    const { data } = response

    const selectOptions = data.map((b) => {
      const { id, name } = b

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
    const searchHash = value ? { search: `breed=${value}` } : {}
    history.push(searchHash)
  }

  const defaultValue = breedsList.find((o) => { return o.value === breed })

  return(
    <Select
      options={breedsList}
      onChange={(v) => { handleChange(v) }}
      value={defaultValue}
      isClearable
    />
  )
}

export default BreedsDropdown
