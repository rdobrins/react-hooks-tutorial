import React, { createContext, useState } from 'react'
import { sample } from 'lodash'

const BookClubContext = createContext()

export const BookClubProvider = (props) => {
  const { children } = props

  const [pool, setPool] = useState([])
  const [kebabId, setKebabId] = useState(null)
  const [kebabCoordinates, setKebabCoordinates] = useState({ x: 0, y: 0 })

  const addToPool = (newValue) => {
    const newValueHash = { name: newValue, count: 1 }

    setPool([...pool, newValueHash])
  }

  const isValid = (val) => {
    const trimmedValue = val.trim()
    const alreadyPresent = pool.some((x) => {
      return x.name.toLowerCase() === trimmedValue.toLowerCase()
    })

    if (trimmedValue.length === 0 || alreadyPresent) {
      return false
    }

    return true
  }

  const decodePool = (encoded) => {
    const decoded = atob(encoded)
    return JSON.parse(decoded)
  }

  const handleEncodedPool = (text) => {
    setPool(decodePool(text))
  }

  const encodePool = () => {
    const stringState = JSON.stringify(pool)
    return btoa(stringState)
  }

  const poolPresent = () => {
    return pool.length > 0
  }

  const addToCount = (poolItem) => {
    let newPoolItem = { ...poolItem, count: (poolItem.count + 1) }
    let oldPoolIndex = pool.findIndex(n => n.name === poolItem.name)
    let newPool = [...pool]
    newPool.splice(oldPoolIndex, 1, newPoolItem)

    setPool(newPool)
  }

  const selectFromPool = () => {
    let mappedPool = []

    for (let parentIndex = 0; parentIndex < pool.length; parentIndex++) {
      for (let childIndex = 0; childIndex < pool[parentIndex].count; childIndex++) {
        mappedPool = [...mappedPool, pool[parentIndex].name]
      }
    }

    return sample(mappedPool)
  }

  const removeFromPool = (poolItem) => {
    let filteredPool = pool.filter((n) => { return n.name !== poolItem.name })
    setPool(filteredPool)
    setKebabId(null)
  }

  const toggleKebab = (event, poolItem) => {
    const { clientX: x, clientY: y } = event
    const newItem = poolItem.name !== kebabId

    if (newItem) {
      setKebabCoordinates({ x: x, y: y })
      setKebabId(poolItem.name)
    } else {
      setKebabId(null)
    }
  }

  return(
    <BookClubContext.Provider value={{
      isValid,
      addToPool,
      handleEncodedPool,
      encodePool,
      poolPresent,
      pool,
      addToCount,
      selectFromPool,
      removeFromPool,
      toggleKebab,
      kebabId,
      kebabCoordinates
    }}>
      {children}
    </BookClubContext.Provider>
  )
}

export default BookClubContext
