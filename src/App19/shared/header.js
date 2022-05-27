import React from 'react'
import Logo from './logo'
import AppsIcon from './appsIcon'
import DarkModeToggler from './darkToggler'
import { HeaderWrapper } from './styles'

const Header = () => {
  return(
    <HeaderWrapper>
      <Logo color="#FF7F35" styles={{ transform: 'scale(0.9)' }} />
      <h1>CAAS</h1>
      <AppsIcon
        color="#8980A2"
        style={{
          marginLeft: '0',
          marginRight: '21px',
          borderRight: '1px solid #8980A2',
          paddingRight: '30px'
        }}
      />
      <h2>CATS</h2>
      <DarkModeToggler/>
    </HeaderWrapper>
  )
}

export default Header
