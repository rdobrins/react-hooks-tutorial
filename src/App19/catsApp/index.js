import React, { useState } from 'react'
import DisplayCat from './display'
import GetCat from './fetch'
import { CatsAppWrapper } from '../shared/styles'

const CatsApp = () => {
  const [image, setImage] = useState(null)

  return(
    <CatsAppWrapper>
      <GetCat setImage={setImage} />
      { image && <DisplayCat image={image}/> }
    </CatsAppWrapper>
  )
}

export default CatsApp
