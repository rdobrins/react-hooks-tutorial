import React, { useEffect } from 'react'
import { divStyleHash } from './styles'

const Chester = () => {
  useEffect(() => {
    console.log('chester page loaded')
  }, [])

  return(
    <div style={divStyleHash}>
      <h1>Chester Page</h1>
    </div>
  )
}

export default Chester
