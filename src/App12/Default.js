import React, { useEffect } from 'react'
import { divStyleHash } from './styles'

const Default = () => {
  useEffect(() => {
    console.log('default page loaded')
  }, [])

  return(
    <div style={divStyleHash}>
      <h1>Default Page</h1>
    </div>
  )
}

export default Default
