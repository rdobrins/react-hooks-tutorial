import React, { useContext } from 'react'
import { LayoutWrapper } from './styles'
import Header from './header'
import { ThemeContext } from '../context'

const Layout = (props) => {
  const { children } = props

  const { darkMode } = useContext(ThemeContext)

  const backgroundColor = darkMode ? '#000' : '#fff'

  return (
    <LayoutWrapper backgroundColor={backgroundColor}>
      <Header/>
      { children() }
    </LayoutWrapper>
  )
}

export default Layout
