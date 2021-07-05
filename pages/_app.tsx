// import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import MainLayout from '../src/components/Layout/MainLayout'
import DefaultLayout from '../src/components/Layout/DefaultLayout'
import theme from '../styles/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    font-family: 'Open Sans', sans-serif;
  }
`

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const Layout = Component?.Layout ? Component.Layout : DefaultLayout

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </ThemeProvider>
    </>
  )
}
export default MyApp
