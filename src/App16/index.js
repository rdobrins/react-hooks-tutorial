import React from 'react'
import { BookClubProvider } from './BookClubContext'
import SetInitialPool from './SetInitialPool'
import AddToPool from './AddToPool'
import EncodePoolState from './EncodePoolState'
import DisplayPool from './DisplayPool'
import SelectNext from './SelectNext'
import KebabMenu from './KebabMenu'

const App16 = () => {
  const poolWrapperStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return(
    <BookClubProvider>
      <div style={poolWrapperStyling}>
        <h1>Host Picker</h1>
        <h4>This is the way</h4>
        <SetInitialPool/>
        <AddToPool/>
        <DisplayPool/>
        <SelectNext/>
        <EncodePoolState/>
      </div>
      <KebabMenu/>
    </BookClubProvider>
  )
}

export default App16
