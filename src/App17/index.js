import React, { useReducer } from 'react'
import { ACTIONS } from './actions'
import { countReducer } from './reducer'
import {
  wrapperStyling,
  counterWrapper
} from './styles'

const App17 = (props) => {
  const initialState = { count: 0 }

  const [state, dispatch] = useReducer(countReducer, initialState)

  const { count } = state

  const add = () => {
    dispatch({
      type: ACTIONS.ADD,
      payload: {
        amount: 1
      }
    })
  }

  const subtract = () => {
    dispatch({
      type: ACTIONS.SUBTRACT,
      payload: {
        amount: 1
      }
    })
  }

  return(
    <div style={wrapperStyling}>

      <h1>Simple Counter App with useReducer</h1>

      <div style={counterWrapper}>

        <button onClick={subtract}>-</button>

        <h1>{ count }</h1>

        <button onClick={add}>+</button>

      </div>
    </div>
  )
}

export default App17
