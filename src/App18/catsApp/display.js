import React from 'react'
import { ImageWrapper } from '../shared/styles'

const Display = ({ image }) => {
  const { url } = image

  return(
    <ImageWrapper>
      <img src={url} />
    </ImageWrapper>
  )
}

export default Display
