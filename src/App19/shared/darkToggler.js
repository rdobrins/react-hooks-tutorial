import React, { useContext, Fragment } from 'react'
import { IconWrapper } from './styles'
import { ThemeContext } from '../themeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons'

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const iconColor = darkMode ? '#FFF9A6' : '#ADD8E6'

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
