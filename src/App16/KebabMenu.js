import React, { useContext } from 'react'
import BookClubContext from './BookClubContext'

const KebabMenu = () => {
  const {
    pool,
    removeFromPool,
    kebabId,
    kebabCoordinates
  } = useContext(BookClubContext)

  const { x = 0, y = 0 } = kebabCoordinates

  const kebabStyling = {
    position: 'absolute',
    top: `${y}px`,
    left: `${x + 20}px`
  }

  if (kebabId === null) return null

  const kebabItem = pool.find((n) => { return n.name === kebabId })

  return(
    <div style={kebabStyling}>
      <button onClick={() => { removeFromPool(kebabItem) }}>hosted</button>
    </div>
  )
}

export default KebabMenu
