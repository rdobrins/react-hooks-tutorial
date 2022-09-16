import React, { useMemo } from 'react'
import DisplayCats from './display'
import GetCat from './fetch'
import BreedsDropdown from './breedsDropdown'
import { CatsAppWrapper } from '../shared/styles'
import { ApiProvider } from './apiContext'
import { CatsProvider } from './catsContext'
import { useLocation } from 'react-router-dom'

const CatsApp = (props) => {
  const location = useLocation()
  const { search } = location
  const urlParams = useMemo(() => new URLSearchParams(search), [search]);
  const searchParam = urlParams.get('breed')

  return (
    <ApiProvider>
      <CatsProvider breed={searchParam}>
        <CatsAppWrapper>
        <BreedsDropdown/>
        <GetCat/>
        <DisplayCats/>
      </CatsAppWrapper>
      </CatsProvider>
    </ApiProvider>
  )
}

export default CatsApp
