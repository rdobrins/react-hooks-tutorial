import React, { useContext, Fragment } from 'react'
import {
  ImageWrapper,
  ImagesWrapper
} from '../shared/styles'
import { CatsContext } from './catsContext'

const Display = () => {
  const { images } = useContext(CatsContext)

  return(
    <ImagesWrapper>
      { images.map(i => {
        const { url } = i

        return(
          <ImageWrapper key={url}>
            <img src={url} />
          </ImageWrapper>
        )
      }) }
    </ImagesWrapper>
  )
}

export default Display
