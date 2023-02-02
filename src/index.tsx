import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

import { ThemeContextProvider } from './context'
import App from './App'
import './i18n'
import './index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>
)