import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './i18n'
import './styles.css'
import { HelmetProvider } from 'react-helmet-async'

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
