import React, { useContext, useState, Fragment } from 'react'
import BookClubContext from './BookClubContext'

const SelectNext = () => {
  const [nextHost, setNextHost] = useState(null)

  const {
    pool,
    poolPresent,
    selectFromPool
  } = useContext(BookClubContext)

  if (!poolPresent()) return null

  const selectNextWrapperStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px'
  }

  const handleSelection = () => {
    setNextHost(selectFromPool())
  }

  return(
    <div style={selectNextWrapperStyling}>
      <button onClick={handleSelection}>
        Select Host for Next Week
      </button>
      { nextHost && <h1>{ nextHost }</h1> }
    </div>
  )
}

export default SelectNext
