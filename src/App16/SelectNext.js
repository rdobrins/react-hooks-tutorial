import React, { useContext, useState, Fragment } from 'react'
import BookClubContext from './BookClubContext'
import JSConfetti from 'js-confetti'

const SelectNext = () => {
  const [nextHost, setNextHost] = useState(null)
  const possiblesStates = ['first', 'second', 'third']

  const {
    pool,
    poolPresent,
    selectFromPool
  } = useContext(BookClubContext)

  const jsConfetti = new JSConfetti()

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

  const fireConfetti = () => {
    setInterval(() => { jsConfetti.addConfetti() }, 1000)
  }

  const handleHype = () => {
    let n = 0

    let ryansInterval = setInterval(() => {
      if (possiblesStates[n]) {
        setNextHost(possiblesStates[n])
        n++
      } else {
        clearInterval(ryansInterval)
        fireConfetti()
        handleSelection()
      }
    }, 1000)
  }

  return(
    <div style={selectNextWrapperStyling}>
      <button onClick={handleHype}>
        Select Host for Next Week
      </button>
      { nextHost && <h1>{ nextHost }</h1> }
    </div>
  )
}

export default SelectNext
