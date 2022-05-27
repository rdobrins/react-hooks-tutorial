import React from 'react'
import { LayoutWrapper } from './styles'
import Header from './header'

const Layout = (props) => {
  const {
    children,
    setDarkMode,
    darkMode
  } = props

  const backgroundColor = darkMode ? '#000' : '#fff'

  return (
    <LayoutWrapper backgroundColor={backgroundColor}>
      <Header
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      { children() }
    </LayoutWrapper>
  )
}

export default Layout
