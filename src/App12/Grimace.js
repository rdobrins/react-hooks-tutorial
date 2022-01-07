import React, { useEffect } from 'react'
import { divStyleHash } from './styles'

const Grimace = () => {
  useEffect(() => {
    console.log('grimace page loaded')
  }, [])

  return(
    <div style={divStyleHash}>
      <h1>Grimace Page</h1>
    </div>
  )
}

export default Grimace
