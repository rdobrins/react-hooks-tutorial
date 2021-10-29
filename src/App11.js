import React from 'react'
import TypeCheckedComponent from './TypeCheckedComponent'

const App11 = () => {
  return(
    <TypeCheckedComponent
      loading={false}
      name='Ryan'
      age={30}
      state='loading'
      numbersArray={[1,2,3]}
      stringOrNumbersArray={[1,'string', 3]}
      object={{
        attr1: 'yay',
        attr2: 5
      }}
    />
  )
}

export default App11
