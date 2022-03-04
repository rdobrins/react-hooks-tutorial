import React, { Fragment, useContext, useState } from 'react'
import BookClubContext from './BookClubContext'

const AddToPool = () => {
  const [newValue, setNewValue] = useState('')

  const { isValid, addToPool } = useContext(BookClubContext)

  const addToPoolWrapperStyling = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '100px'
  }

  const submitNew = (e) => {
    e.preventDefault()

    if (isValid(newValue)) {
      addToPool(newValue)
      setNewValue('')
    }
  }

  return(
    <form style={addToPoolWrapperStyling} onSubmit={submitNew}>
      <input onChange={ (e) => { setNewValue(e.target.value) } } value={newValue}/>
      <button type='submit'>Add New Person</button>
    </form>
  )
}

export default AddToPool
