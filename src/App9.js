import React, { useState, useMemo } from 'react'
import './App.css';

const GrandChild = ({number}) => {
  return(
    <div className='grandChildContainer'>
      { `GrandChild ${number}` }
    </div>
  )
}

const Child = ({number}) => {
  const isEven = number%2 === 0

  const memoizeGrandChild = useMemo(() => {
    return <GrandChild number={number}/>
  }, [isEven])

  return (
    <div className='childContainer'>
      { `Child ${number}` }
      {memoizeGrandChild}
    </div>
  )
}

const App9 = (props) => {
  const [number, setNumber] = useState(1)

  return (
    <div className='initialContainer'>
      {`App9 `}
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setNumber(4)}>4</button>
      <Child number={number}/>
    </div>
  )
}

export default App9
