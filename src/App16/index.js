import React from 'react'
import { BookClubProvider } from './BookClubContext'
import SetInitialPool from './SetInitialPool'
import AddToPool from './AddToPool'
import EncodePoolState from './EncodePoolState'
import DisplayPool from './DisplayPool'
import SelectNext from './SelectNext'

const App16 = () => {
  const poolWrapperStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return(
    <BookClubProvider>
      <div style={poolWrapperStyling}>
        <h1>Book Club Picker</h1>
        <SetInitialPool/>
        <AddToPool/>
        <DisplayPool/>
        <SelectNext/>
        <EncodePoolState/>
      </div>
    </BookClubProvider>
  )
}

export default App16
