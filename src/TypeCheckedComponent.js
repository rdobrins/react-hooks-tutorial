import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PropsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    margin: 20px;
  }
`

const TypeCheckedComponent = (props) => {
  const {
    loading,
    name,
    age,
    state,
    numbersArray,
    stringOrNumbersArray,
    object
  } = props

  const {
    attr1,
    attr2
  } = object

  return(
    <PropsWrapper>
      <div>Loading: { `${loading}` }</div>
      <div>Name: { name }</div>
      <div>Age: { age }</div>
      <div>State: { state }</div>
      <div>Numbers Array: { numbersArray }</div>
      <div>String or Numbers Array: { stringOrNumbersArray }</div>
      <div>Object: attr1: { attr1 }, attr2: { attr2 }</div>
    </PropsWrapper>
  )
}

TypeCheckedComponent.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  state: PropTypes.oneOf(['loading', 'ready']),
  numbersArray: PropTypes.arrayOf(PropTypes.number),
  stringOrNumbersArray: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  object: PropTypes.exact({
    attr1: PropTypes.string,
    attr2: PropTypes.number
  }).isRequired
}

export default TypeCheckedComponent
