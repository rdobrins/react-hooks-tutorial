import React, { useEffect } from 'react'
import { divStyleHash } from './styles'

const Chiquita = () => {
  useEffect(() => {
    console.log('chiquita page loaded')
  }, [])

  return(
    <div style={divStyleHash}>
      <h1>Chiquita Page</h1>
    </div>
  )
}

export default Chiquita
