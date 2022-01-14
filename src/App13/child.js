import React, { Component, useContext } from 'react'
import { ColorContext } from './context'
import {
  app13WrapperStyle
} from './style'

class ClassChild extends Component {
  constructor(props) {
    super()

    this.addToCount = this.addToCount.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)

    this.state = {
      isOpen: false,
      count: 0
    }
  }

  componentDidMount() {
    console.log('WE MOUNTED!')
  }

  addToCount() {
    this.setState({
      count: (this.state.count + 1)
    })
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { count, isOpen } = this.state

    const { color } = useContext(ColorContext)

    return(
      <div style={app13WrapperStyle}>
        <span>{this.state.count} is the count</span>

        <a style={app13WrapperStyle} onClick={this.addToCount}>Add to count</a>

        { isOpen && <div style={app13WrapperStyle}>Color</div> }

        <a style={app13WrapperStyle} onClick={this.toggleOpen}>Toggle Open</a>
      </div>
    )
  }
}

export default ClassChild
