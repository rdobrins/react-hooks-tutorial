import { ACTIONS } from './actions'

export const countReducer = (state, action) => {
  let output = state

  const { count } = state
  const { amount } = action.payload

  switch (action.type) {
    case ACTIONS.ADD:
      output = { ...state, count: count + amount }
      break;
    case ACTIONS.SUBTRACT:
      output = { ...state, count: count - amount }
      break;
  }

  return output
}
