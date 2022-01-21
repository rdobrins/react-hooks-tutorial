import React from 'react'
import ErrorBoundary from './errorBoundary'
import ProblemChild from './problemChild'

// https://reactjs.org/docs/error-boundaries.html

const wrapperStyling = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '100px',
  width: '100%'
}

const App14 = (props) => {
  return(
    <div style={wrapperStyling}>
      <ErrorBoundary>
        <ProblemChild/>
      </ErrorBoundary>
    </div>
  )
}

export default App14
