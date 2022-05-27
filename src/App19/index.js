import React from 'react'
import Layout from './shared/layout'
import CatsApp from './catsApp'
import { ContentWrapper } from './shared/styles'
import { ThemeProvider } from './context'

const App19 = () => {
  return(
    <ThemeProvider>
      <Layout>
        {() => {
          return(
            <ContentWrapper>
              <CatsApp/>
            </ContentWrapper>
          )
        }}
      </Layout>
    </ThemeProvider>
  )
}

export default App19
