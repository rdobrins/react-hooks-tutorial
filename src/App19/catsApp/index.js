import React, { useState } from 'react'
import DisplayCat from './display'
import GetCat from './fetch'
import BreedsDropdown from './breedsDropdown'
import { CatsAppWrapper } from '../shared/styles'

const CatsApp = () => {
  const [image, setImage] = useState(null)
  const [breed, setBreed] = useState(null)

  return(
    <CatsAppWrapper>
      <BreedsDropdown breed={breed} setBreed={setBreed} />
      <GetCat breed={breed} setImage={setImage} />
      { image && <DisplayCat image={image}/> }
    </CatsAppWrapper>
  )
}

export default CatsApp
