import React, { useState, Fragment, useMemo } from 'react'

const getSquareRoot = (number) => {
  return Math.sqrt(number)
}

const App9 = () => {
  const [memoNumber, setMemoNumber] = useState(81)

  const squareRootOfNumber = useMemo(() => {
    return <span>The square root of {memoNumber} is {getSquareRoot(memoNumber)}</span>
  }, [memoNumber])

  return(
    <Fragment>
      <button onClick={() => { setMemoNumber(144) }}>
        144
      </button>
      <button onClick={() => { setMemoNumber(81) }}>
        81
      </button>
      <button onClick={() => { setMemoNumber(16) }}>
        16
      </button>
      <button onClick={() => { setMemoNumber(4) }}>
        4
      </button>
      {squareRootOfNumber}
    </Fragment>
  )
}

export default App9
