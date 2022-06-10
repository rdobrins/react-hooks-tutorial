import React from 'react'
import DisplayCats from './display'
import GetCat from './fetch'
import BreedsDropdown from './breedsDropdown'
import { CatsAppWrapper } from '../shared/styles'
import { ApiProvider } from './apiContext'
import { CatsProvider } from './catsContext'

const CatsApp = () => (
  <ApiProvider>
    <CatsProvider>
      <CatsAppWrapper>
      <BreedsDropdown/>
      <GetCat/>
      <DisplayCats/>
    </CatsAppWrapper>
    </CatsProvider>
  </ApiProvider>
)

export default CatsApp
