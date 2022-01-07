import React, { useEffect } from 'react'
import { divStyleHash } from './styles'

const Hamburglar = () => {
  useEffect(() => {
    console.log('hamburglar page loaded')
  }, [])

  return(
    <div style={divStyleHash}>
      <h1>Hamburglar Page</h1>
    </div>
  )
}

export default Hamburglar
