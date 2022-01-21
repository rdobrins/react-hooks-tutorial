import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    const { hasError, error, errorInfo } = this.state

    const preWrapStyle = { whiteSpace: 'pre-wrap' }

    if (hasError) {
      return(
        <div style={preWrapStyle}>
          <h1>Party Bears!</h1>
          <p>{`Put error here => ${error.toString()}`}</p>
          <p>{`Put info here =>: ${errorInfo.componentStack}`}</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
