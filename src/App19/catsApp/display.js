import React, { useContext, Fragment } from 'react'
import { ImageWrapper } from '../shared/styles'
import { CatsContext } from './catsContext'

const Display = () => {
  const { images } = useContext(CatsContext)

  return(
    <Fragment>
      { images.map(i => {
        const { url } = i

        return(
          <ImageWrapper>
            <img src={url} />
          </ImageWrapper>
        )
      }) }
    </Fragment>
  )
}

export default Display
