import React, { Fragment } from 'react'
import { IconWrapper } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons'

const DarkModeToggler = (props) => {
  const {
    darkMode,
    setDarkMode
  } = props

  const iconColor = darkMode ? '#fff' : '#fff'

  return(
    <IconWrapper color={iconColor}>
      <FontAwesomeIcon
        onClick={() => { setDarkMode(!darkMode) }}
        icon={darkMode ? faSun : faMoon}
      />
    </IconWrapper>
  )
}

export default DarkModeToggler
