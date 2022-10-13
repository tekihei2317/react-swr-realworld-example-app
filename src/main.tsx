import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './components/AppProvider'
import { AppRoutes } from './components/AppRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
)
