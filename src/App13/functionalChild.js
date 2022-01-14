import React, { useContext, useState, useEffect } from 'react'
import { ColorContext } from './context'
import {
  app13WrapperStyle
} from './style'

const ClassChild = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [count, setCount] = useState(0)

  const { color } = useContext(ColorContext)

  useEffect(() => {
    console.log('WE MOUNTED!')
  }, [])

  const addToCount = () => {
    setCount(count + 1)
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const colorStyleHash = {
    backgroundColor: `${color}`
  }

  const newStyleHash = {
    ...colorStyleHash,
    ...app13WrapperStyle
  }

  return(
    <div style={app13WrapperStyle}>
      <span>{count} is the count</span>

      <a style={app13WrapperStyle} onClick={addToCount}>Add to count</a>

      { isOpen && <div style={newStyleHash}>Color</div> }

      <a style={app13WrapperStyle} onClick={toggleOpen}>Toggle Open</a>
    </div>
  )
}

export default ClassChild
