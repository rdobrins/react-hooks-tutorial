import React, { Fragment, useRef, useState, useEffect } from 'react'

const App10 = () => {

  useEffect(() => {
    console.log('COMPONENT RENDERED')
  })

  ////////// Part 1 //////////

  let ryansRef = useRef(null)
  let otherRef = useRef(null)

  const focusInputField = () => {
    console.log(ryansRef.current)
    console.log(ryansRef.current.value)
    otherRef.current.value = ryansRef.current.value
    ryansRef.current.focus()
  }

  ////////// Part 2 //////////

  const colorOptions = [
    { display: 'red', hex: '#D2042D' },
    { display: 'yellow', hex: '#FFE800' },
    { display: 'blue', hex: '#1870D5' }
  ]

  let colorIndexRef = useRef(0)
  const [colorIndex, setColorIndex] = useState(0)

  const newColorIndex = (index) => {
    return (index > 1 ? 0 : index + 1)
  }

  const incrementRefColor = () => {
    const { current } = colorIndexRef

    colorIndexRef.current = newColorIndex(current)

    console.log(colorOptions[colorIndexRef.current].display)
  }

  const incrementStateColor = () => {
    setColorIndex(newColorIndex(colorIndex))
  }

  ////////////////////////////

  return(
    <Fragment>
      <div className='useRefContainer'>
        <label>Case 1:</label>
        <input className='focusInput' placeholder={'ryansRef'} ref={ryansRef} />
        <input className='focusInput' placeholder={'otherRef'} ref={otherRef} />
        <button className='focusBtn' onClick={focusInputField}>Focus Button</button>
      </div>

      <div className='useRefContainer case2'>
        <label>Case 2:</label>

        <div className='colorBoxes'>
          <div className='colorBox' style={{ backgroundColor: colorOptions[colorIndexRef.current].hex }}>
            <div className='colorBoxText'>{colorOptions[colorIndexRef.current].display}</div>
          </div>
          <div className='colorBox' style={{ backgroundColor: colorOptions[colorIndex].hex }}>
            <div className='colorBoxText'>{colorOptions[colorIndex].display}</div>
          </div>
        </div>

        <div className='colorButtons'>
          <button className='colorBtn' onClick={incrementRefColor}>Increment Ref Color</button>
          <button className='colorBtn' onClick={incrementStateColor}>Increment State Color</button>
        </div>
      </div>
    </Fragment>
  )
}

export default App10
