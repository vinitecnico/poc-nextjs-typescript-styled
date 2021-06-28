import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import HomePage from '../pages'

describe('HomePage', () => {
  it('should render the heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    )

    expect(screen.getByRole('heading', { name: 'Welcome to Next.js!' })).toBeInTheDocument()
  })
})
