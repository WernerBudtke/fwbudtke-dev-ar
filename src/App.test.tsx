import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders site title', () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    )
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toBeInTheDocument()
  })
})
