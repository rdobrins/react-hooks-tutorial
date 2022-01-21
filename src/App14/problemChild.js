import React, { useState } from 'react'

const ProblemChild = (props) => {
  const [count, setCount] = useState(0)

  const iterateCount = () => {
    setCount(count + 1)
  }

  if (count > 1) throw new Error('OH NO I CRASHED!!!')

  return(
    <a onClick={iterateCount}>
      <h1>No Problems Here.</h1>
      <h1>{`Count is ${count}`}</h1>
    </a>
  )
}

export default ProblemChild
